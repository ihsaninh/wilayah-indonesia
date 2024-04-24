# API Documentation: Indonesian Administrative Regions

This API provides access to Indonesian administrative regions including provinces, regencies (kabupaten), districts (kecamatan), and subdistricts (desa/kelurahan). Each level of administrative region is accessible through separate JSON files.

## Endpoints

- **Provinces:** Access the list of provinces in Indonesia.
  - URL: [https://ihsaninh.github.io/wilayah-indonesia/provinces.json](https://ihsaninh.github.io/wilayah-indonesia/provinces.json)
  - Example response:
    ```json
    [
        {
            "id": 11,
            "value": "Aceh"
        },
        {
            "id": 12,
            "value": "Sumatera Utara"
        },
        // More provinces...
    ]
    ```

- **Regencies:** Access the list of regencies for a specific province by providing the province ID.
  - URL: `https://ihsaninh.github.io/wilayah-indonesia/<province_id>/regencies.json`
  - Example URL: [https://ihsaninh.github.io/wilayah-indonesia/11/regencies.json](https://ihsaninh.github.io/wilayah-indonesia/11/regencies.json)
  - Example response:
    ```json
    [
        {
            "id": 1101,
            "province_id": 11,
            "type": "Kota",
            "value": "Kota Sabang"
        },
        {
            "id": 1102,
            "province_id": 11,
            "type": "Kota",
            "value": "Kota Langsa"
        },
        // More regencies...
    ]
    ```

- **Districts:** Access the list of districts for a specific regency within a province.
  - URL: `https://ihsaninh.github.io/wilayah-indonesia/<province_id>/<regency_id>/district.json`
  - Example URL: [https://ihsaninh.github.io/wilayah-indonesia/11/1101/district.json](https://ihsaninh.github.io/wilayah-indonesia/11/1101/district.json)
  - Example response:
    ```json
    [
        {
            "id": 1101010,
            "province_id": 11,
            "regency_id": 1101,
            "value": "Sukakarya"
        },
        {
            "id": 1101020,
            "province_id": 11,
            "regency_id": 1101,
            "value": "Sukajaya"
        },
        // More districts...
    ]
    ```

- **Subdistricts:** Access the list of subdistricts for a specific district within a regency and province.
  - URL: `https://ihsaninh.github.io/wilayah-indonesia/<province_id>/<regency_id>/<district_id>/subdistrict.json`
  - Example URL: [https://ihsaninh.github.io/wilayah-indonesia/11/1101/1101010/subdistrict.json](https://ihsaninh.github.io/wilayah-indonesia/11/1101/1101010/subdistrict.json)
  - Example response:
    ```json
    [
        {
            "id": 1101010001,
            "province_id": 11,
            "regency_id": 1101,
            "district_id": 1101010,
            "value": "Sukakarya"
        },
        {
            "id": 1101010002,
            "province_id": 11,
            "regency_id": 1101,
            "district_id": 1101010,
            "value": "Sukajaya"
        },
        // More subdistricts...
    ]
    ```

## Usage

To access the data, simply make HTTP GET requests to the provided URLs corresponding to the desired administrative region level. The response will be in JSON format containing the relevant information about the administrative regions.

## Example

To fetch the list of regencies for the province of Aceh (ID: 11), you can send a GET request to [https://ihsaninh.github.io/wilayah-indonesia/11/regencies.json](https://ihsaninh.github.io/wilayah-indonesia/11/regencies.json).

## Notes

- Replace `<province_id>`, `<regency_id>`, and `<district_id>` with the actual IDs of the provinces, regencies, and districts respectively.
- The IDs for provinces, regencies, districts, and subdistricts are unique identifiers for each administrative region.
- Ensure proper handling of HTTP requests and error responses in your application when utilizing this API.

Feel free to explore the API and integrate it into your applications as needed. If you encounter any issues or have further inquiries, please don't hesitate to contact the API provider.
