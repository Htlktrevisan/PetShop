import React from "react";
import TituloBanhoTosa from "../components/TituloBanhoTosa"
import ContentBanhoTosa from "../components/ContentBanhoTosa";
import Rotulo from "../components/Rotulo";
const BanhoTosa = () => {
	return (
		<div>
			<TituloBanhoTosa />
			<ContentBanhoTosa />
			<Rotulo Rotulo="Banho e Tosa"/>
		</div>
	);
};

export default BanhoTosa;
