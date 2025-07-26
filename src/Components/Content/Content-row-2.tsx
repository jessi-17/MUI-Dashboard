import {  ArrowRightAlt } from "@mui/icons-material"
import { Avatar, Box, Card, Container, Typography } from "@mui/material"
const  cardcontent = [
  {
    title:"Doctoral Certificate in Applied Computer Science",
    cash:"$10,280",
    img:"",
    subheading:"CT groups of Institutions"
  },
  {
    title:"Bachelors in Computer Science and Engineering",
    cash:"$11,584",
    img:"",
    subheading:"Lovely Proffessional university"
  },
  {
    title:"Doctoral Certificate in Applied Computer Science",
    cash:"$18,343",
    img:"",
    subheading:"Chandigarh University"
  },
]
const Contentrow2 = () => {
  return (
    <Container maxWidth="xl" disableGutters className="flex flex-col  gap-[16px]">
      <Box className="flex justify-between items-center">
        <Typography className="row-2-heading">Courses</Typography>
        <Typography className="row-2-subheading">See More <ArrowRightAlt /></Typography>
      </Box>
      <Box className="flex gap-[16px] flex-col md:flex-row flex-wrap">
        {cardcontent.map((item) => (
        <Card elevation={0} className="flex-1 flex-wrap flex !flex-col !p-[14px] gap-[16px] !rounded-[12px] !overflow-visible ">
          <Typography className="card-2-title">{item.title}</Typography>
            <Typography className="card-2-Cash">{item.cash}</Typography>
          <Box className="flex items-center gap-[8px]">
            <Avatar src={item.img} className="!w-[24px] !h-[24px]"></Avatar>
            <Typography className="card-2-subheading">{item.subheading}</Typography>
          </Box>
        </Card>
        ))}
      </Box>
    </Container>
  )
}

export default Contentrow2