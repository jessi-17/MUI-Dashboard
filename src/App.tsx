
import { Container } from "@mui/material"
import "./App.css"
import MiniDrawer from "./Components/Sidebar/navbar"
import Header from "./Components/Header/Header"
import Contentrow1 from "./Components/Content/Content-row-1"
import Contentrow3 from "./Components/Content/Content-row-3"
import Contentrow2 from "./Components/Content/Content-row-2"


export default function App() {
	return (
		<>
			<Container maxWidth="xl" disableGutters sx={{
				display:"flex"
			}}>
					<MiniDrawer  />
				<Container maxWidth="xl" disableGutters  sx={{ flexGrow: 1,}} className="Content-container h-[150vh] flex flex-col gap-[16px] ">
				<Container maxWidth="xl" disableGutters className="h-[80px] flex items-center bg-white  shadow shadow-gray-300 sticky top-0 z-10">
						<Header />
						</Container>
					<Container maxWidth="xl" disableGutters className="flex gap-[16px] flex-col !ps-[32px] !pe-[20px] !p-[24px] overflow-hidden">
						<Contentrow1 />
						<Contentrow2 />
						<Contentrow3 />
					</Container>
				</Container>
			</Container>
	
		</>

	)
};





