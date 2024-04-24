# API Documentation: Indonesian Administrative Regions

This API provides access to Indonesian administrative regions including provinces, regencies (kabupaten), districts (kecamatan), and subdistricts (desa/kelurahan). Each level of administrative region is accessible through separate JSON files.

## Endpoints

- **Provinces (Provinsi):** Access the list of provinces in Indonesia.
  - URL: [https://ihsaninh.github.io/wilayah-indonesia/provinces.json](https://ihsaninh.github.io/wilayah-indonesia/provinces.json)
  - Example response:
    ```json
    [
        {
            "id": 31,
            "value": "DKI Jakarta"
        },
        {
            "id": 32,
            "value": "Jawa Barat"
        },
        // More provinces...
    ]
    ```

- **Regencies (Kabupaten/Kota):** Access the list of regencies for a specific province by providing the province ID.
  - URL: `https://ihsaninh.github.io/wilayah-indonesia/<province_id>/regencies.json`
  - Example URL: [https://ihsaninh.github.io/wilayah-indonesia/32/regencies.json](https://ihsaninh.github.io/wilayah-indonesia/32/regencies.json)
  - Example response:
    ```json
    [
        {
            "id": 3201,
            "province_id": 32,
            "type": "Kabupaten",
            "value": "Bogor"
        },
        {
            "id": 3271,
            "province_id": 32,
            "type": "Kota",
            "value": "Kota Bogor"
        },
        // More regencies...
    ]
    ```

- **Districts (Kecamatan):** Access the list of districts for a specific regency within a province.
  - URL: `https://ihsaninh.github.io/wilayah-indonesia/<province_id>/<regency_id>/district.json`
  - Example URL: [https://ihsaninh.github.io/wilayah-indonesia/32/3201/district.json](https://ihsaninh.github.io/wilayah-indonesia/32/3201/district.json)
  - Example response:
    ```json
    [
        {
            "id": 320101,
            "province_id": 32,
            "regency_id": 3201,
            "value": "Cibinong"
        },
        {
            "id": 320107,
            "province_id": 32,
            "regency_id": 3201,
            "value": "Cileungsi"
        },
        // More districts...
    ]
    ```

- **Subdistricts (Desa/Kelurahan):** Access the list of subdistricts for a specific district within a regency and province.
  - URL: `https://ihsaninh.github.io/wilayah-indonesia/<province_id>/<regency_id>/<district_id>/subdistrict.json`
  - Example URL: [https://ihsaninh.github.io/wilayah-indonesia/32/3201/320101/subdistrict.json](https://ihsaninh.github.io/wilayah-indonesia/32/3201/320101/subdistrict.json)
  - Example response:
    ```json
    [
        {
            "id": 320101,
            "province_id": 32,
            "regency_id": 3201,
            "district_id": 320101,
            "value": "Nanggewer",
            "postal_code": "16912"
        },
        {
            "id": 320101,
            "province_id": 32,
            "regency_id": 3201,
            "district_id": 320101,
            "value": "Pakansari",
            "postal_code": "16915"
        },
        // More subdistricts...
    ]
    ```

## Usage

To access the data, simply make HTTP GET requests to the provided URLs corresponding to the desired administrative region level. The response will be in JSON format containing the relevant information about the administrative regions.

## Notes

- Replace `<province_id>`, `<regency_id>`, and `<district_id>` with the actual IDs of the provinces, regencies, and districts respectively.
- The IDs for provinces, regencies, districts, and subdistricts are unique identifiers for each administrative region.
- Ensure proper handling of HTTP requests and error responses in your application when utilizing this API.

Feel free to explore the API and integrate it into your applications as needed. If you encounter any issues or have further inquiries, please don't hesitate to [open a GitHub issue](https://github.com/ihsaninh/wilayah-indonesia/issues) in this repository for assistance. You can also reach out to me through my social media channels listed on [my GitHub profile](https://github.com/ihsaninh).
