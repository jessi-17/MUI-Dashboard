import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, } from './Weather';
import { Box, Card, Container, Typography } from '@mui/material';
const chartSetting = {
  series: [{ dataKey: 'seoul' }],
  height: 365,
  margin: { left: 0 },
};
const carddata = [
    {
        course:"Data Structure and Algorithms",
        discription:"This is the discription"
    },
    {
        course:"Data Structure and Algorithms",
        discription:"This is the discription"
    },
    {
        course:"Data Structure and Algorithms",
        discription:"This is the discription" 
    },
    {
        course:"Data Structure and Algorithms",
        discription:"This is the discription"
    }
]
const Contentrow3 = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{}} className="grid grid-cols-10 gap-[16px] !mt-[20px]">
        <Box className="col-span-10 md:col-span-5 lg:col-span-4 bg-white !p-[16px] rounded-[12px] gap-[16px]">
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
        <Box className="col-span-10 md:col-span-5 lg:col-span-6">
        <Card elevation={0} className='flex flex-col !px-[16px] !pb-[16px] !rounded-[12px] !pt-[8px] gap-[16px]'>
            <Box>
            <Typography className='title-imagecard'>Your courses</Typography>
            <Typography className='para-imagecard'>Check all the courses you're currently enrolled in different field</Typography>
            </Box>
            <Box className="grid sm:grid-cols-2 gap-[16px]"
            sx={{
                height:{xs:"800px",sm:"400px",md:"350px"}
            }}>
                {carddata.map((item)=>
                    <Card className='!rounded-[12px] image-card relative'>
                <Box className="absolute bottom-4 left-4 flex flex-col gap-[4px]">
                <Typography className='image-heading'>
                  {item.course}
                </Typography>
                <Typography className='image-para'>
                  {item.discription}
                </Typography>
              </Box>
                    </Card>
                )}
            </Box>
        </Card>

        </Box>
    </Container>
  )
}

export default Contentrow3