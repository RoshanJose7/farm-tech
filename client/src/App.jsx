import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/navBar.component';
import AboutPage from './pages/aboutPage/aboutPage.pages';
import HomePage from './pages/homePage/homePage.pages';
import ContactPage from './pages/contactPage/contactPage.pages';
import ServicesPage from './pages/servicesPage/servicesPage.pages';
import CommoditiesPage from './pages/commoditiesPage/commodities.pages';
import LandPage from './pages/landPage/landPage.pages';
import FertilizerPage from './pages/FertilizerPage/FertilizerPage.pages';
import ConsumerPage from './pages/consumerPage/Consumer.Pages';
import Footer from './components/footer/footer.component';
import './gTranslate';
import './index.scss';
import './responsive.styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div>
				<div id='google_translate_element' />
				<NavBar />
				<Switch>
					<Route path='/' component={HomePage} exact />
					<Route path='/about' component={AboutPage} />
					<Route path='/contact' component={ContactPage} />
					<Route path='/services' component={ServicesPage} />
					<Route path='/commodities' component={CommoditiesPage} />
					<Route path='/land' component={LandPage} />
					<Route path='/fertilizer' component={FertilizerPage} />
					<Route path='/consumer' component={ConsumerPage} />
					<Route path='/*' component={CommoditiesPage} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
