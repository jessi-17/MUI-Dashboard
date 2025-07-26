
import { Container } from "@mui/material"
import "./App.css"
import Header from "./Components/Header/Header"
import Contentrow2 from "./Components/Content/Content-row-2"
import MiniDrawer from "./Components/Sidebar/navbar"
import Contentrow1 from "./Components/Content/Content-row1"
import Contentrow3 from "./Components/Content/contentrow3"


export default function App() {
	return (
		<>
		<Container maxWidth="xl" disableGutters sx={{
				display:"flex",
			}}>
				<MiniDrawer  />
			<Container maxWidth="xl" disableGutters  sx={{ flexGrow: 1,}} className="Content-container flex flex-col gap-[16px]">
				<Container maxWidth="xl" disableGutters className="h-[80px] flex items-center bg-white  shadow shadow-gray-300 sticky top-0 z-10">
						<Header />
				</Container>
					<Container maxWidth="xl" disableGutters className="flex gap-[16px] items-center justify-center flex-col"
					sx={{
						paddingLeft:{xs:"10px",sm:"20px",md:"32px"},
						paddingRight:{xs:"10px",sm:"20px",md:"20px"},
						padding:{xs:"10px",sm:"20px",md:"24px"}
					}}
					>
						<Contentrow1 />
						<Contentrow2 />
						<Contentrow3 />
					</Container>
			</Container>
		</Container>
		</>

	)
};





