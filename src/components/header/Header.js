import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Welcome to the <em>portfolio</em> website
					</strong>
					<br />of our excellent reliable team
				</h1>
				<div className="header__text">
					<p>we are ready to help you implement any of your ideas</p>
				</div>
				<a href="https://api.whatsapp.com/send/?phone=77762848470&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%21+%EF%BF%BD&type=phone_number&app_absent=0" className="btn">
					Contact us via WhatsApp
				</a>
			</div>
		</header>
	);
}

export default Header;