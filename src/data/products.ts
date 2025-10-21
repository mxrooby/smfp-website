import msi_pro_h610m from "@/assets/products/MSI Pro H610M S DDR4.png";
import msi_b450m from "@/assets/products/MSI B450M-A PRO MAX II.png";
import ramsta_rs_b450mp from "@/assets/products/RAMSTA RS-B450MP.png";
import asus_prime_b650 from "@/assets/products/ASUS PRIME B650-PLUS.png";
import asus_tuf_b550 from "@/assets/products/ASUS TUF GAMING B550-PLUS.png";
import msi_pro_x670 from "@/assets/products/MSI PRO X670-P WIFI.png";
import msi_mpg_z790 from "@/assets/products/MSI MPG Z790 CARBON WIFI.png";

import amd_ryzen_3_3200g from "@/assets/products/AMD Ryzen 3 3200G.png";
import amd_ryzen_5_3600 from "@/assets/products/AMD Ryzen 5 3600.png";
import amd_ryzen_5_5600g from "@/assets/products/AMD Ryzen 5 5600G.png";
import amd_ryzen_5_5600x from "@/assets/products/AMD Ryzen 5 5600X.png";
import amd_ryzen_7_5700x from "@/assets/products/AMD Ryzen 7 5700X.png";
import amd_ryzen_7_5800x from "@/assets/products/AMD Ryzen 7 5800X.png";
import amd_ryzen_9_5900x from "@/assets/products/AMD Ryzen 9 5900X.png";
import amd_ryzen_5_7600 from "@/assets/products/AMD Ryzen 5 7600.png";
import amd_ryzen_7_7700x from "@/assets/products/AMD Ryzen 7 7700X.png";
import amd_ryzen_9_7900x from "@/assets/products/AMD Ryzen 9 7900X.png";
import amd_ryzen_9_7950x from "@/assets/products/AMD Ryzen 9 7950X.png";

import intel_i3_13100 from "@/assets/products/Intel Core i3 13100.png";
import intel_i3_14100 from "@/assets/products/Intel Core i3 14100.png";
import intel_i5_13400 from "@/assets/products/Intel Core i5 13400.png";
import intel_i5_14500 from "@/assets/products/Intel Core i5 14500.png";
import intel_i5_14600k from "@/assets/products/Intel Core i5 14600K.png";
import intel_i7_13700k from "@/assets/products/Intel Core i7 13700K.png";
import intel_i7_14700k from "@/assets/products/Intel Core i7 14700K.png";
import intel_i9_14900k from "@/assets/products/Intel Core i9 14900K.png";

import fantech_polar_lc240 from "@/assets/products/Fantech Polar LC240 (Liquid).png";
import inplay_seaview_240 from "@/assets/products/Inplay Seaview 240 Pro (Liquid).png";
import inplay_seaview_360 from "@/assets/products/Inplay Seaview 360 Pro (Liquid).png";
import inplay_s20 from "@/assets/products/Inplay S20 (Air Cooler).png";
import inplay_s40 from "@/assets/products/Inplay S40 (Air Cooler).png";
import cm_hyper212 from "@/assets/products/Cooler Master Hyper 212 Black Edition (AirCooler).png";
import deepcool_ls720 from "@/assets/products/DeepCool LS720 SE 360.png";
import cm_ml360 from "@/assets/products/Cooler Master MasterLiquid ML360R RGB.png";

import seagate_500 from "@/assets/products/Seagate Video 3.5 HDD 500GB.png";
import seagate_1tb from "@/assets/products/Seagate Video 3.5 HDD 1TB.png";

import ramsta_128 from "@/assets/products/Ramsta S800 128GB SSD.png";
import ramsta_256 from "@/assets/products/Ramsta S800 256GB SSD.png";
import ramsta_512 from "@/assets/products/Ramsta S800 512GB SSD.png";
import ramsta_1tb from "@/assets/products/Ramsta S800 1TB SSD.png";
import ramsta_2tb from "@/assets/products/Ramsta S800 2TB SSD.png";
import crucial_mx500 from "@/assets/products/Crucial MX500 500GB SSD.png";

import kingston_ddr4_8 from "@/assets/products/Kingston FURY Beast DDR4 8GB.png";
import hkcmemory_16 from "@/assets/products/HKCMEMORY HU40 DDR4 16GB.png";
import kingston_ddr4_32 from "@/assets/products/Kingston FURY Beast DDR4 32GB.png";
import kingston_ddr5_8 from "@/assets/products/Kingston Fury Beast DDR5 8GB.png";
import kingston_ddr5_16 from "@/assets/products/Kingston FURY Beast DDR5 16GB.png";
import corsair_ddr5_32 from "@/assets/products/Corsair Vengeance DDR5 32GB.png";

import samsung_970_1tb from "@/assets/products/Samsung 970 EVO Plus 1TB.png";
import samsung_970_500 from "@/assets/products/Samsung 970 EVO Plus 500GB.png";
import samsung_970_250 from "@/assets/products/Samsung 970 EVO Plus 250GB.png";
import samsung_970_2tb from "@/assets/products/Samsung 970 EVO Plus 2TB.png";

import inplay_gs_550 from "@/assets/products/InPlay GS 550 (550W).png";
import corsair_cx650 from "@/assets/products/Corsair CX650 (650W).png";
import inplay_gs_750 from "@/assets/products/InPlay GS 750 (750W).png";
import inplay_ak400 from "@/assets/products/InPlay AK400 (400W).png";
import cm_mwe_750 from "@/assets/products/Cooler Master MWE White 750W.png";
import corsair_rm850x from "@/assets/products/Corsair RM850x 850W.png";

import gig_rtx3050 from "@/assets/products/Gigabyte RTX 3050 Eagle OC 8GB.png";
import gig_rx9060xt from "@/assets/products/Gigabyte RX 9060 XT Gaming OC.png";
import gtx_750ti from "@/assets/products/GTX 750 Ti 4GB DDR5.png";
import msi_rtx3060 from "@/assets/products/MSI RTX 3060 12GB.png";
import sapphire_rx9060xt from "@/assets/products/MSI RTX 3060 12GB.png";

export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  specs: string[];
  image: string;
}
// categories
export const productCategories = [
  { id: 'motherboard', name: 'Motherboard', icon: '🔌' },
  { id: 'cpu', name: 'CPU', icon: '🔥' },
  { id: 'cpuCooler', name: 'CPU Cooler', icon: '❄️' },
  { id: 'hdd', name: 'HDD', icon: '🧭' },
  { id: 'ssd', name: 'SSD', icon: '💾' },
  { id: 'ram', name: 'RAM', icon: '⚡' },
  { id: 'nvme', name: 'NVMe', icon: '⚡' },
  { id: 'psu', name: 'PSU', icon: '🔋' },
  { id: 'gpu', name: 'GPU', icon: '🎮' },
];

// products
export const products: Product[] = [
  // Motherboards
  { id: 'mb-1', name: 'MSI Pro H610M S DDR4', brand: 'MSI', model: 'H610M S DDR4', category: 'motherboard', price: 4495, specs: ['Form Factor: mATX', 'Socket: LGA1700', 'Memory: DDR4'], image: msi_pro_h610m },
  { id: 'mb-2', name: 'MSI B450M-A PRO MAX II', brand: 'MSI', model: 'B450M-A PRO MAX II', category: 'motherboard', price: 3995, specs: ['Form Factor: mATX', 'Socket: AM4', 'Chipset: B450'], image: msi_b450m },
  { id: 'mb-3', name: 'RAMSTA RS-B450MP', brand: 'RAMSTA', model: 'RS-B450MP', category: 'motherboard', price: 2550, specs: ['Form Factor: mATX', 'Socket: AM4', 'Chipset: B450'], image: ramsta_rs_b450mp },
  { id: 'mb-4', name: 'ASUS PRIME B650-PLUS', brand: 'ASUS', model: 'PRIME B650-PLUS', category: 'motherboard', price: 16495, specs: ['Form Factor: ATX', 'Socket: AM5', 'Chipset: B650'], image: asus_prime_b650 },
  { id: 'mb-5', name: 'ASUS TUF GAMING B550-PLUS', brand: 'ASUS', model: 'TUF GAMING B550-PLUS', category: 'motherboard', price: 7000, specs: ['Form Factor: ATX', 'Socket: AM4', 'Chipset: B550'], image: asus_tuf_b550 },
  { id: 'mb-6', name: 'MSI PRO X670-P WIFI', brand: 'MSI', model: 'PRO X670-P WIFI', category: 'motherboard', price: 17840, specs: ['Form Factor: ATX', 'Socket: AM5', 'Chipset: X670', 'WiFi: Built-in'], image: msi_pro_x670 },
  { id: 'mb-7', name: 'MSI MPG Z790 CARBON WIFI', brand: 'MSI', model: 'MPG Z790 CARBON WIFI', category: 'motherboard', price: 27795, specs: ['Form Factor: ATX', 'Socket: LGA1700', 'Chipset: Z790', 'WiFi: Built-in'], image: msi_mpg_z790 },

  // CPUs
  { id: 'cpu-1', name: 'AMD Ryzen 3 3200G', brand: 'AMD', model: 'Ryzen 3 3200G', category: 'cpu', price: 2990, specs: ['Socket: AM4', 'APU: Vega Graphics'], image: amd_ryzen_3_3200g },
  { id: 'cpu-2', name: 'AMD Ryzen 5 3600', brand: 'AMD', model: 'Ryzen 5 3600', category: 'cpu', price: 3699, specs: ['Socket: AM4'], image: amd_ryzen_5_3600 },
  { id: 'cpu-3', name: 'AMD Ryzen 5 5600G', brand: 'AMD', model: 'Ryzen 5 5600G', category: 'cpu', price: 5695, specs: ['Socket: AM4', 'APU: Integrated Vega Graphics'], image: amd_ryzen_5_5600g },
  { id: 'cpu-4', name: 'AMD Ryzen 5 5600X', brand: 'AMD', model: 'Ryzen 5 5600X', category: 'cpu', price: 6995, specs: ['Socket: AM4'], image: amd_ryzen_5_5600x },
  { id: 'cpu-5', name: 'AMD Ryzen 7 5700X', brand: 'AMD', model: 'Ryzen 7 5700X', category: 'cpu', price: 11300, specs: ['Socket: AM4'], image: amd_ryzen_7_5700x },
  { id: 'cpu-6', name: 'AMD Ryzen 7 5800X', brand: 'AMD', model: 'Ryzen 7 5800X', category: 'cpu', price: 10410, specs: ['Socket: AM4'], image: amd_ryzen_7_5800x },
  { id: 'cpu-7', name: 'AMD Ryzen 9 5900X', brand: 'AMD', model: 'Ryzen 9 5900X', category: 'cpu', price: 9495, specs: ['Socket: AM4'], image: amd_ryzen_9_5900x },
  { id: 'cpu-8', name: 'AMD Ryzen 5 7600', brand: 'AMD', model: 'Ryzen 5 7600', category: 'cpu', price: 10450, specs: ['Socket: AM5'], image: amd_ryzen_5_7600 },
  { id: 'cpu-9', name: 'AMD Ryzen 7 7700X', brand: 'AMD', model: 'Ryzen 7 7700X', category: 'cpu', price: 18895, specs: ['Socket: AM5'], image: amd_ryzen_7_7700x },
  { id: 'cpu-10', name: 'AMD Ryzen 9 7900X', brand: 'AMD', model: 'Ryzen 9 7900X', category: 'cpu', price: 21895, specs: ['Socket: AM5'], image: amd_ryzen_9_7900x },
  { id: 'cpu-11', name: 'AMD Ryzen 9 7950X', brand: 'AMD', model: 'Ryzen 9 7950X', category: 'cpu', price: 34895, specs: ['Socket: AM5'], image: amd_ryzen_9_7950x },
  { id: 'cpu-12', name: 'Intel Core i3 13100', brand: 'Intel', model: 'Core i3-13100', category: 'cpu', price: 6500, specs: ['Socket: LGA1700'], image: intel_i3_13100 },
  { id: 'cpu-13', name: 'Intel Core i3 14100', brand: 'Intel', model: 'Core i3-14100', category: 'cpu', price: 6795, specs: ['Socket: LGA1700'], image: intel_i3_14100 },
  { id: 'cpu-14', name: 'Intel Core i5 13400', brand: 'Intel', model: 'Core i5-13400', category: 'cpu', price: 9495, specs: ['Socket: LGA1700'], image: intel_i5_13400 },
  { id: 'cpu-15', name: 'Intel Core i5 14500', brand: 'Intel', model: 'Core i5-14500', category: 'cpu', price: 14695, specs: ['Socket: LGA1700'], image: intel_i5_14500 },
  { id: 'cpu-16', name: 'Intel Core i5 14600K', brand: 'Intel', model: 'Core i5-14600K', category: 'cpu', price: 12895, specs: ['Socket: LGA1700'], image: intel_i5_14600k },
  { id: 'cpu-17', name: 'Intel Core i7 13700K', brand: 'Intel', model: 'Core i7-13700K', category: 'cpu', price: 25295, specs: ['Socket: LGA1700'], image: intel_i7_13700k },
  { id: 'cpu-18', name: 'Intel Core i7 14700K', brand: 'Intel', model: 'Core i7-14700K', category: 'cpu', price: 22250, specs: ['Socket: LGA1700'], image: intel_i7_14700k },
  { id: 'cpu-19', name: 'Intel Core i9 14900K', brand: 'Intel', model: 'Core i9-14900K', category: 'cpu', price: 30250, specs: ['Socket: LGA1700'], image: intel_i9_14900k },

  // Coolers
  { id: 'cooler-1', name: 'Fantech Polar LC240', brand: 'Fantech', model: 'Polar LC240', category: 'cpuCooler', price: 4029, specs: ['Type: Liquid', 'Radiator: 240mm'], image: fantech_polar_lc240 },
  { id: 'cooler-2', name: 'Inplay Seaview 240 Pro', brand: 'Inplay', model: 'Seaview 240 Pro', category: 'cpuCooler', price: 2450, specs: ['Type: Liquid', 'Radiator: 240mm'], image: inplay_seaview_240 },
  { id: 'cooler-3', name: 'Inplay Seaview 360 Pro', brand: 'Inplay', model: 'Seaview 360 Pro', category: 'cpuCooler', price: 2185, specs: ['Type: Liquid', 'Radiator: 360mm'], image: inplay_seaview_360 },
  { id: 'cooler-4', name: 'Inplay S20', brand: 'Inplay', model: 'S20', category: 'cpuCooler', price: 350, specs: ['Type: Air Cooler'], image: inplay_s20 },
  { id: 'cooler-5', name: 'Inplay S40', brand: 'Inplay', model: 'S40', category: 'cpuCooler', price: 299, specs: ['Type: Air Cooler'], image: inplay_s40 },
  { id: 'cooler-6', name: 'Cooler Master Hyper 212 Black Edition', brand: 'Cooler Master', model: 'Hyper 212 Black Edition', category: 'cpuCooler', price: 2699, specs: ['Type: Air Cooler'], image: cm_hyper212 },
  { id: 'cooler-7', name: 'DeepCool LS720 SE 360', brand: 'DeepCool', model: 'LS720 SE 360', category: 'cpuCooler', price: 5895, specs: ['Type: Liquid', 'Radiator: 360mm'], image: deepcool_ls720 },
  { id: 'cooler-8', name: 'Cooler Master MasterLiquid ML360R RGB', brand: 'Cooler Master', model: 'MasterLiquid ML360R RGB', category: 'cpuCooler', price: 6599, specs: ['Type: Liquid', 'Radiator: 360mm'], image: cm_ml360 },

  // HDDs
  { id: 'hdd-1', name: 'Seagate Video 3.5\" HDD 500GB (ST500VM002)', brand: 'Seagate', model: 'ST500VM002', category: 'hdd', price: 1500, specs: ['Capacity: 500GB', 'Form Factor: 3.5"'], image: seagate_500 },
  { id: 'hdd-2', name: 'Seagate Video 3.5\" HDD 1TB (ST1000VM002)', brand: 'Seagate', model: 'ST1000VM002', category: 'hdd', price: 1800, specs: ['Capacity: 1TB', 'Form Factor: 3.5"'], image: seagate_1tb },

  // SSDs
  { id: 'ssd-1', name: 'Ramsta S800 128GB SSD', brand: 'Ramsta', model: 'S800 128GB', category: 'ssd', price: 700, specs: ['Capacity: 128GB'], image: ramsta_128 },
  { id: 'ssd-2', name: 'Ramsta S800 256GB SSD', brand: 'Ramsta', model: 'S800 256GB', category: 'ssd', price: 1300, specs: ['Capacity: 256GB'], image: ramsta_256 },
  { id: 'ssd-3', name: 'Ramsta S800 512GB SSD', brand: 'Ramsta', model: 'S800 512GB', category: 'ssd', price: 1900, specs: ['Capacity: 512GB'], image: ramsta_512 },
  { id: 'ssd-4', name: 'Ramsta S800 1TB SSD', brand: 'Ramsta', model: 'S800 1TB', category: 'ssd', price: 2700, specs: ['Capacity: 1TB'], image: ramsta_1tb },
  { id: 'ssd-5', name: 'Ramsta S800 2TB SSD', brand: 'Ramsta', model: 'S800 2TB', category: 'ssd', price: 5000, specs: ['Capacity: 2TB'], image: ramsta_2tb },
  { id: 'ssd-6', name: 'Crucial MX500 500GB SSD', brand: 'Crucial', model: 'MX500 500GB', category: 'ssd', price: 3590, specs: ['Capacity: 500GB', 'Form Factor: 2.5" SATA'], image: crucial_mx500 },

  // RAM
  { id: 'ram-1', name: 'Kingston FURY Beast DDR4 8GB', brand: 'Kingston', model: 'FURY Beast 8GB', category: 'ram', price: 2250, specs: ['Type: DDR4', 'Capacity: 8GB'], image: kingston_ddr4_8 },
  { id: 'ram-2', name: 'HKCMEMORY HU40 DDR4 16GB', brand: 'HKCMEMORY', model: 'HU40 16GB', category: 'ram', price: 3500, specs: ['Type: DDR4', 'Capacity: 16GB'], image: hkcmemory_16 },
  { id: 'ram-3', name: 'Kingston FURY Beast DDR4 32GB', brand: 'Kingston', model: 'FURY Beast 32GB', category: 'ram', price: 4950, specs: ['Type: DDR4', 'Capacity: 32GB'], image: kingston_ddr4_32 },
  { id: 'ram-4', name: 'Kingston Fury Beast DDR5 8GB', brand: 'Kingston', model: 'Fury Beast DDR5 8GB', category: 'ram', price: 2200, specs: ['Type: DDR5', 'Capacity: 8GB'], image: kingston_ddr5_8 },
  { id: 'ram-5', name: 'Kingston FURY Beast DDR5 16GB', brand: 'Kingston', model: 'FURY Beast DDR5 16GB', category: 'ram', price: 4195, specs: ['Type: DDR5', 'Capacity: 16GB'], image: kingston_ddr5_16 },
  { id: 'ram-6', name: 'Corsair Vengeance DDR5 32GB', brand: 'Corsair', model: 'Vengeance DDR5 32GB', category: 'ram', price: 8900, specs: ['Type: DDR5', 'Capacity: 32GB'], image: corsair_ddr5_32 },

  // NVMe
  { id: 'nvme-1', name: 'Samsung 970 EVO Plus 1TB', brand: 'Samsung', model: '970 EVO Plus 1TB', category: 'nvme', price: 3200, specs: ['Capacity: 1TB'], image: samsung_970_1tb },
  { id: 'nvme-2', name: 'Samsung 970 EVO Plus 500GB', brand: 'Samsung', model: '970 EVO Plus 500GB', category: 'nvme', price: 4500, specs: ['Capacity: 500GB'], image: samsung_970_500 },
  { id: 'nvme-3', name: 'Samsung 970 EVO Plus 250GB', brand: 'Samsung', model: '970 EVO Plus 250GB', category: 'nvme', price: 4200, specs: ['Capacity: 250GB'], image: samsung_970_250 },
  { id: 'nvme-4', name: 'Samsung 970 EVO Plus 2TB', brand: 'Samsung', model: '970 EVO Plus 2TB', category: 'nvme', price: 7050, specs: ['Capacity: 2TB'], image: samsung_970_2tb },

  // PSUs
  { id: 'psu-1', name: 'InPlay GS 550', brand: 'InPlay', model: 'GS 550', category: 'psu', price: 1150, specs: ['Wattage: 550W'], image: inplay_gs_550 },
  { id: 'psu-2', name: 'Corsair CX650', brand: 'Corsair', model: 'CX650', category: 'psu', price: 3195, specs: ['Wattage: 650W'], image: corsair_cx650 },
  { id: 'psu-3', name: 'InPlay GS 750', brand: 'InPlay', model: 'GS 750', category: 'psu', price: 1999, specs: ['Wattage: 750W'], image: inplay_gs_750 },
  { id: 'psu-4', name: 'InPlay AK400', brand: 'InPlay', model: 'AK400', category: 'psu', price: 1150, specs: ['Wattage: 400W'], image: inplay_ak400 },
  { id: 'psu-5', name: 'Cooler Master MWE White 750W', brand: 'Cooler Master', model: 'MWE White 750W', category: 'psu', price: 4200, specs: ['Wattage: 750W'], image: cm_mwe_750 },
  { id: 'psu-6', name: 'Corsair RM850x 850W', brand: 'Corsair', model: 'RM850x', category: 'psu', price: 9495, specs: ['Wattage: 850W'], image: corsair_rm850x },

  // GPUs
  { id: 'gpu-1', name: 'Gigabyte RTX 3050 Eagle OC 8GB', brand: 'Gigabyte', model: 'RTX 3050 Eagle OC', category: 'gpu', price: 12495, specs: ['VRAM: 8GB GDDR6'], image: gig_rtx3050 },
  { id: 'gpu-2', name: 'Gigabyte RX 9060 XT Gaming OC', brand: 'Gigabyte', model: 'RX 9060 XT Gaming OC', category: 'gpu', price: 33000, specs: ['VRAM: check vendor'], image: gig_rx9060xt },
  { id: 'gpu-3', name: 'GTX 750 Ti 4GB DDR5', brand: 'NVIDIA/Various', model: 'GTX 750 Ti', category: 'gpu', price: 4200, specs: ['VRAM: 4GB (GDDR5)'], image: gtx_750ti },
  { id: 'gpu-4', name: 'MSI RTX 3060 12GB', brand: 'MSI', model: 'RTX 3060', category: 'gpu', price: 17995, specs: ['VRAM: 12GB GDDR6'], image: msi_rtx3060 },
  { id: 'gpu-5', name: 'Sapphire RX 9060 XT 16GB', brand: 'Sapphire', model: 'RX 9060 XT', category: 'gpu', price: 35000, specs: ['VRAM: 16GB (vendor SKU)'], image: sapphire_rx9060xt },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = () => {
  return productCategories;
};

export default products;


