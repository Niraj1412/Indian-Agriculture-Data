# Indian Agriculture Data Analysis

This project performs analytics on the Indian Agriculture dataset provided by the National Data and Analytics Platform, NITI Aayog. The analysis includes identifying the crop with the maximum and minimum production for each year from 1950 to 2020 and calculating the average yield and cultivation area for each crop over the same period. The results are displayed using Mantine components.

## Project Setup

### Prerequisites

- Node.js
- Yarn

### Installation


1. **Clone the repository**:
   ```bash
   git clone [<repository-url>](https://github.com/Niraj1412/Indian-Agriculture-Data)
   cd mantine-agro-analysis


2. **Install dependencies:**:
   ```bash
   yarn install
   
3. **Run the development server:**:
   ```bash
   yarn dev


### Project Structure
- `src/utils/dataProcessor.ts`: Contains the logic for processing the dataset and calculating the required statistics.
- `src/App.tsx`: Main React component rendering the tables using Mantine.
- `data`: Folder containing the dataset in JSON format.

## Usage
Upon running the development server, the browser will display two tabs. The first tab, "Table 1," shows Max & Min Crop Production, while the second tab, "Table 2," presents Crop Statistics (1950-2020):

### - Yearly Crop Production
Displays the crop with maximum and minimum production for each year.
### - Crop Statistics (1950-2020)
Displays the average yield and average cultivation area for each crop over the years.

## Screenshots
## Yearly Crop Production

## Crop Statistics (1950-2020)

# Technologies Used
- **TypeScript**: For type-safe JavaScript code.
- **Vite**: A fast frontend build tool.
- **Mantine**: For UI components.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.

