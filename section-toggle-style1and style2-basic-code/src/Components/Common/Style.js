const Style = ({ attributes, id, }) => {
	const {colors} = attributes;


	const mainSl = `#${id}`;
	const bBlocksPricingTableSection = `${mainSl} .bBlocksPricingTableSection`;
	const main = `${bBlocksPricingTableSection} .main`;
	

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${main}{
		  background-color:${colors?.bgcolor};
		}
		
	`}} />;
}
export default Style;
