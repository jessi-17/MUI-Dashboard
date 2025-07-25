import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, } from './Weather';
import { Box, Card, Container, Typography } from '@mui/material';
const chartSetting = {
  series: [{ dataKey: 'seoul' }],
  height: 365,
  margin: { left: 0 },
};

export default function Contentrow3() {
  return (
    <Container disableGutters maxWidth="xl" className='grid grid-cols-12  items-center !mt-[8px] gap-[40px]'>
      <Box className="col-span-12 md:col-span-6 lg:col-span-5 bg-white !rounded-[12px] !p-[16px]">
        <div className='flex justify-between'>
          <Typography className='title-imagecard'>Study Report</Typography>
          <span className='bg-gray-200 rounded-2xl  !w-[80px] !h-[24px] flex items-center justify-center'><Typography className='span-text'>6 Months</Typography></span>
        </div>
        <div style={{ width: '100%' }}>
          <BarChart
            dataset={dataset}
            borderRadius={20}
            xAxis={[{ dataKey: 'month', }]}
            fill='#ffffff'
            colors={["#B2B2FF"]}
            {...chartSetting}
            className='barchart'
          />
        </div>
      </Box>
      <Box className="col-span-12 md:col-span-6 lg:col-span-7">
        <Card elevation={0} className='grid grid-cols-8 !px-[16px] !pb-[16px] !rounded-[12px] !pt-[8px] gap-[16px]'>
          <Box className="col-span-8 flex flex-col gap-[4px]">
            <Typography className='title-imagecard'>Your courses</Typography>
            <Typography className='para-imagecard'>Check all the courses you're currently enrolled in different field</Typography>
          </Box>
          <Box className="col-span-8 grid grid-cols-4 sm:grid-cols-8 gap-[16px]">
            <Card elevation={0} className='col-span-4 !h-[160px] !rounded-[12px] image-card relative'>
              <Box className="absolute bottom-4 left-4 flex flex-col gap-[4px]">
                <Typography className='image-heading'>
                  Data Structure and Algorithm
                </Typography>
                <Typography className='image-para'>
                  your best description
                </Typography>
              </Box>
            </Card>
            <Card elevation={0} className='col-span-4 !h-[160px] !rounded-[12px] image-card relative'>
              <Box className="absolute bottom-4 left-4 flex flex-col gap-[4px]">
                <Typography className='image-heading'>
                  Data Structure and Algorithm
                </Typography>
                <Typography className='image-para'>
                  your best description
                </Typography>
              </Box>
            </Card>
            <Card elevation={0} className='col-span-4 !h-[160px] !rounded-[12px] image-card relative'>
              <Box className="absolute bottom-4 left-4 flex flex-col gap-[4px]">
                <Typography className='image-heading'>
                  Data Structure and Algorithm
                </Typography>
                <Typography className='image-para'>
                  your best description
                </Typography>
              </Box>
            </Card>
            <Card elevation={0} className='col-span-4 !h-[160px] !rounded-[12px] image-card relative'>
              <Box className="absolute bottom-4 left-4 flex flex-col gap-[4px]">
                <Typography className='image-heading'>
                  Data Structure and Algorithm
                </Typography>
                <Typography className='image-para'>
                  your best description
                </Typography>
              </Box>
            </Card>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}


