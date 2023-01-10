const { generateReportData, storeData } = require('./src/data.js');
const log = require('./src/utils/logger.js');

const data = generateReportData(log);
storeData(data);