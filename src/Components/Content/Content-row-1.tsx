
import { Avatar, Box, Button, Card,Container, Typography } from "@mui/material"
const name ="jessi"
import heroimg from "../../assets/girl studying online.png"
import girl from "../../assets/intro user.png"
import greenstat from "../../assets/green.png"
import purplestat from "../../assets/purple.png"
import orangestat from "../../assets/orange.png"
import bluestat from "../../assets/blue.png"
import { DocumentScanner, People, PublishedWithChanges, QueuePlayNext } from "@mui/icons-material"
const Contentrow1 = () => {
  return (
    <Container disableGutters maxWidth="xl" className='grid grid-cols-12  gap-[40px]'>
      <Box 
      sx={{
      }} className="col-span-10 md:col-span-12 lg:col-span-7">
    <Box>
      <Card elevation={0}  className="flex flex-col md:flex-row userCard-1 !rounded-[24px]" sx={[
        {
          padding:"32px",
          paddingTop:"16px",
          paddingBottom:"16px",
          minHeight:"256px",
          gap:"100px"
        },
      ]} > 
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          gap:"16px",
          textTransform:"capitalize",
          justifyContent:"center",
        }} className="w-[340px]">
          <Typography variant="body1" className="heading-1 flex gap-[8px] items-center">Hi,{name} <span><img src={girl} className="!w-[30px]" alt="" /></span></Typography>
          <Typography variant="body2" className="sub-heaidng">What do you want to learn today with your partner ?</Typography>
          <Typography variant="body2" className="paragraph-1">Discover courses, track progress and achieve your learning goods seamlessly.</Typography>
          <Button variant="contained" sx={{
            width:"123px"
          }} className="btn-1">Explore Courses</Button>
        </Box>
        <Box sx={{
          justifyContent:"center",
          alignItems:"center",

        }} className="hidden md:flex">
          <img className="heroimg" src={heroimg}></img>
        </Box>
      </Card>
    </Box>
      </Box>
      <Box sx={{
      }} className="col-span-10 md:col-span-5">
    <Box
     className="Stats-cards rounded-[12px] ">
      <Card elevation={0}  className="cards cards-1 relative">
        <img src={orangestat} className="max-w-[143px] h-[72px] absolute right-0" />
        <Box className="flex flex-col gap-[18px]">
          <Avatar className="orange-avatar"><QueuePlayNext sx={{fontSize:"20px"}} /></Avatar>
          <Box className="flex flex-col gap-[1px]">
            <Typography className="small-title">155+</Typography>
            <Typography className="small-para">Completed Courses</Typography>
          </Box>
        </Box>
      </Card>
      <Card elevation={0}  className="cards cards-2 relative">
        <img src={bluestat} className="w-[143px] h-[72px] absolute right-0" />
        <Box className="flex flex-col gap-[18px]" >
          <Avatar className="blue-avatar"><DocumentScanner sx={{fontSize:"20px"}}/></Avatar>
          <Box>
            <Typography className="small-title">40 +</Typography>
            <Typography className="small-para">Earned Certification </Typography>
          </Box>
        </Box>
      </Card>
      <Card elevation={0}  className="cards cards-3 relative">
        <img src={purplestat} className="w-[143px] h-[72px] absolute right-0" />
        <Box className="flex flex-col gap-[18px]">
          <Avatar className="pink-avatar"><PublishedWithChanges sx={{fontSize:"20px"}} /></Avatar>
          <Box>
            <Typography className="small-title">20</Typography>
            <Typography className="small-para">Pending Courses</Typography>
          </Box>
        </Box>
      </Card>
      <Card elevation={0} className="cards cards-4 relative">
        <img src={greenstat} className="w-[143px] h-[72px] absolute right-0"/>
        <Box className="flex flex-col gap-[18px]">
          <Avatar className="green-avatar"><People sx={{fontSize:"20px"}}/></Avatar>
          <Box>
            <Typography className="small-title">40k+</Typography>
            <Typography className="small-para">Community Support</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
      </Box>
    </Container>
  )
}

export default Contentrow1