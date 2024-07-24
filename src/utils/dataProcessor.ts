import rawData from '../data/Manufac_India_Agro_Dataset.json';

export interface CropData {
  year: number;
  crop: string;
  production: number;
  area: number;
  yield: number;
}

export interface AggregatedData {
  year: number;
  maxCrop: string;
  minCrop: string;
}

export interface CropStats {
  crop: string;
  avgYield: number;
  avgArea: number;
}

export const processData = (): { maxMinProduction: AggregatedData[]; cropStats: CropStats[] } => {
  console.log('Raw Data Sample:', rawData.slice(0, 5)); // Log a sample of the raw data

  // Processed Data with correct property names
  const processedData: CropData[] = rawData.map((item: any) => ({
    year: parseInt(item['Year'].match(/\d{4}/)[0]), // Extract year number
    crop: item['Crop Name'],
    production: item['Crop Production (UOM:t(Tonnes))'] || 0,
    area: item['Area Under Cultivation (UOM:Ha(Hectares))'] || 0,
    yield: item['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))'] || 0,
  }));

  console.log('Processed Data:', processedData.slice(0, 5)); // Log the processed data

  const yearMap = new Map<number, CropData[]>();
  processedData.forEach((item) => {
    if (!yearMap.has(item.year)) {
      yearMap.set(item.year, []);
    }
    yearMap.get(item.year)!.push(item);
  });

  const maxMinProduction: AggregatedData[] = [];
  yearMap.forEach((crops, year) => {
    const maxCrop = crops.reduce((prev, curr) => (curr.production > prev.production ? curr : prev));
    const minCrop = crops.reduce((prev, curr) => (curr.production < prev.production ? curr : prev));
    maxMinProduction.push({ year, maxCrop: maxCrop.crop, minCrop: minCrop.crop });
  });

  console.log('Max Min Production:', maxMinProduction.slice(0, 5)); // Log the max/min production data

  const cropMap = new Map<string, { totalYield: number; totalArea: number; count: number }>();
  processedData.forEach((item) => {
    if (!cropMap.has(item.crop)) {
      cropMap.set(item.crop, { totalYield: 0, totalArea: 0, count: 0 });
    }
    const cropStats = cropMap.get(item.crop)!;
    cropStats.totalYield += item.yield;
    cropStats.totalArea += item.area;
    cropStats.count += 1;
  });

  const cropStats: CropStats[] = [];
  cropMap.forEach((value, crop) => {
    cropStats.push({
      crop,
      avgYield: parseFloat((value.totalYield / value.count).toFixed(3)),
      avgArea: parseFloat((value.totalArea / value.count).toFixed(3)),
    });
  });

  console.log('Crop Stats:', cropStats.slice(0, 5)); // Log the crop stats

  return { maxMinProduction, cropStats };
};
