const { generateReportData } = require('./data');

describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    const logger = jest.fn();

    // logger.mockImplementationOnce(() => {});

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
