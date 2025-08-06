
import { Avatar, Box, Button, Card,Container, Typography } from "@mui/material"
const name ="jessi"
import heroimg from "../../assets/girl studying online.png"
import girl from "../../assets/intro user.png"
import greenstat from "../../assets/green.png"
import purplestat from "../../assets/purple.png"
import orangestat from "../../assets/orange.png"
import bluestat from "../../assets/blue.png"
import { DocumentScanner, People, PublishedWithChanges, QueuePlayNext } from "@mui/icons-material"
import "../../media.css"

const Contentrow1 = () => {
  return (
    <>
    <Container maxWidth={false} disableGutters className="grid grid-col-6 md:gris-cols-8 lg:grid-cols-10 gap-[16px]">
        <Box className="col-span-4 md:col-span-5 lg:col-span-6">     
             <Card elevation={0} sx={{
                pl:"32px",
                pr:"32px",
                pt:"16px",
                pb:"16px",
        
              }}  className="flex-col flex md:flex-row justify-between items-center !rounded-[24px]" > 
                <Box className="flex flex-col gap-[16px]"
                sx={{maxWidth:{sm:"480px",md:"400px",lg:"329px"}}}
                >
                  <Typography variant="body1" className="heading-1 flex gap-[8px] items-center">Hi,{name} <span><img src={girl}  alt="" /></span></Typography>
                  <Typography variant="body2" className="sub-heaidng">What do you want to learn today with your partner ?</Typography>
                  <Typography variant="body2" className="paragraph-1">Discover courses, track progress and achieve your learning goods seamlessly.</Typography>
                  <Button variant="contained" sx={{
                    width:"123px"
                  }} className="btn-1">Explore Courses</Button>
                </Box>
                <Box >
                  <img src={heroimg}></img>
                </Box>
              </Card></Box>
        <Box className="col-span-4 md:col-span-5 lg:col-span-4">
                <Box
     className="Stats-cards rounded-[12px] ">
      <Card elevation={0}  className="cards cards-1 relative">
        <img src={orangestat} className=" -z-0 max-w-[143px] h-[72px] absolute right-0" />
        <Box className="flex flex-col gap-[18px]">
          <Avatar className="orange-avatar"><QueuePlayNext sx={{fontSize:"20px"}} /></Avatar>
          <Box className="flex flex-col gap-[1px] absolute bottom-2">
            <Typography className="small-title">155+</Typography>
            <Typography className="small-para">Completed Courses</Typography>
          </Box>
        </Box>
      </Card>
      <Card elevation={0}  className="cards cards-2 relative">
        <img src={bluestat} className=" -z-0 max-w-[143px] h-[72px] absolute right-0" />
        <Box className="flex flex-col gap-[18px]" >
          <Avatar className="blue-avatar"><DocumentScanner sx={{fontSize:"20px"}}/></Avatar>
          <Box  className="flex flex-col gap-[1px] absolute md:static  bottom-2">
            <Typography className="small-title">40 +</Typography>
            <Typography className="small-para">Earned Certification </Typography>
          </Box>
        </Box>
      </Card>
      <Card elevation={0}  className="cards cards-3 relative">
        <img src={purplestat} className=" -z-0 max-w-[143px] h-[72px] absolute right-0" />
        <Box className="flex flex-col gap-[18px]">
          <Avatar className="pink-avatar"><PublishedWithChanges sx={{fontSize:"20px"}} /></Avatar>
          <Box className="flex flex-col gap-[1px] absolute  md:static bottom-2">
            <Typography className="small-title">20</Typography>
            <Typography className="small-para">Pending Courses</Typography>
          </Box>
        </Box>
      </Card>
      <Card elevation={0} className="cards cards-4 relative">
        <img src={greenstat} className=" -z-0 max-w-[143px] h-[72px] absolute right-0"/>
        <Box className="flex flex-col gap-[18px]">
          <Avatar className="green-avatar"><People sx={{fontSize:"20px"}}/></Avatar>
          <Box className="flex flex-col gap-[1px] absolute  md:static bottom-2">
            <Typography className="small-title">40k+</Typography>
            <Typography className="small-para">Community Support</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
        </Box>
    </Container>
    </>
  )
}

export default Contentrow1