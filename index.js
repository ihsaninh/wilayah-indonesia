const fs = require('fs');
const path = require('path');

// Function to read data from CSV files
function readCSV(filePath) {
    const fileContent = fs.readFileSync(path.join(__dirname, filePath), { encoding: 'utf8' });
    return fileContent.split(/\r?\n/) // Adjusted to handle both Windows and Unix line endings
        .slice(1) // Skip the first row (header)
        .map(line => line.split(/\,/)); // Split each line by comma
}

// Read data from CSV files
const provinces = readCSV('./provinces.csv');
const regencies = readCSV('./regencies.csv');
const districts = readCSV('./districts.csv');
const villages = readCSV('./villages.csv');

// Create directories for APIs
fs.mkdirSync('dist');

// Write data to provinces.json
fs.writeFileSync('./dist/provinces.json', JSON.stringify(provinces.map(province => ({
    id: parseInt(province[1]), // Assuming code is the second field
    value: province[0] // Assuming name is the first field
})), null, 2));

// Generate API endpoints for regencies.json, district.json, and subdistrict.json
provinces.forEach(province => {
    const [provinceName, provinceId] = province;
    const provinceRegencies = regencies.filter(regency => regency[2] === provinceId);

    // Create directory for the province
    fs.mkdirSync(`dist/${provinceId}`);

    // Write data to regencies.json
    fs.writeFileSync(`./dist/${provinceId}/regencies.json`, JSON.stringify(provinceRegencies.map(regency => ({
        id: parseInt(regency[4]),
        province_id: parseInt(provinceId),
        type: regency[0],
        value: regency[0] === 'Kota' ? `${regency[0]} ${regency[1]}` : regency[1]
    })), null, 2));

    // Generate API endpoints for district.json and subdistrict.json
    provinceRegencies.forEach(regency => {
        const regencyDistricts = districts.filter(district => district[4] === regency[4]);

        // Create directory for the regency
        fs.mkdirSync(`dist/${provinceId}/${regency[4]}`);

        // Write data to district.json
        fs.writeFileSync(`./dist/${provinceId}/${regency[4]}/district.json`, JSON.stringify(regencyDistricts.map(district => ({
            id: parseInt(district[5]), // Assuming code is the second field
            province_id: parseInt(provinceId),
            regency_id: parseInt(regency[4]),
            value: district[0] // Assuming name is the first field
        })), null, 2));

        // Generate API endpoints for subdistrict.json
        regencyDistricts.forEach(district => {
            // const [, districtId] = district;
            const districtVillages = villages.filter(village => village[7] == district[5]);

            // Create directory for the district
            fs.mkdirSync(`dist/${provinceId}/${regency[4]}/${district[5]}`);

            // Write data to subdistrict.json
            fs.writeFileSync(`./dist/${provinceId}/${regency[4]}/${district[5]}/subdistrict.json`, JSON.stringify(districtVillages.map(village => ({
                id: parseInt(village[7]), // Assuming code is the second field
                province_id: parseInt(provinceId),
                regency_id: parseInt(regency[4]),
                district_id: parseInt(district[5]),
                value: village[1], // Assuming name is the first field
                postal_code: village[0]
            })), null, 2));
        });
    });
});

console.log('Generated successfully!');
