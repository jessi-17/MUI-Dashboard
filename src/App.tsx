
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
			<Container maxWidth="xl" sx={{
				display:"flex"
			}}>
					<MiniDrawer  />
				<Container maxWidth="xl"  sx={{ flexGrow: 1,  }} className="bg-amber-200 h-[150vh]">
						<Container className="h-[80px] flex items-center">
						<Header />
						</Container>
					<Container className="flex gap-[16px] flex-col">
						<Contentrow1 />
						<Contentrow2 />
						<Contentrow3 />
					</Container>
				</Container>
			</Container>
		</>

	)
};





