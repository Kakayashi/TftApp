import React, { useEffect, useState } from "react";
import {
	TeamPicker,
	ChoseWrapper,
	TeamPickerList,
	TeamPickerWrapper,
	Wrapper,
	ItemWrapper,
	Search,
	Title,
} from "./BuilderTextFild.style";
import {
	useThemeUpdate,
	useTheme,
} from "../../organisms/TeamBuilder/TeamBuilderThemeContext";

function BuilderTextFild() {
	const [isClicked, setIsClicked] = useState(false);
	const [tier, setTier] = useState("S");
	const [search, setSearch] = useState({ name: "", tactic: "" });
	const handleChangeName = (e) => {
		let newValue = e.target.value;
		setSearch({ ...search, name: newValue });
		//console.log(search);
	};
	const handleChangeTactic = (e) => {
		let newValue = e.target.value;
		setSearch({ ...search, tactic: newValue });
		//console.log(search);
	};

	const ToogleClicked = () => setIsClicked(!isClicked);
	const ChangeTier = (id) => setTier(id);

	let newContext = useTheme();
	const updateContext = useThemeUpdate();
	useEffect(() => {
		console.log(newContext);
		newContext.titile = search.name;
		newContext.strategy = search.tactic;
		newContext.tier = tier;
		updateContext(newContext);
		console.log(newContext);
	}, [tier, search]);

	return (
		<Wrapper>
			<TeamPickerWrapper isClicked={isClicked}>
				<TeamPicker
					onClick={() => ToogleClicked()}
					isClicked={isClicked}
					tier={tier}
				>
					<ChoseWrapper isClicked={isClicked}>
						<TeamPickerList tier="S" onClick={() => ChangeTier("S")} />
						<TeamPickerList tier="A" onClick={() => ChangeTier("A")} />
						<TeamPickerList tier="B" onClick={() => ChangeTier("B")} />
						<TeamPickerList tier="C" onClick={() => ChangeTier("C")} />
					</ChoseWrapper>
				</TeamPicker>
			</TeamPickerWrapper>
			<ItemWrapper>
				<Title>Team name:</Title>
				<Search onChange={(e) => handleChangeName(e)} />
			</ItemWrapper>
			<ItemWrapper>
				<Title>Tactic:</Title>
				<Search onChange={(e) => handleChangeTactic(e)} />
			</ItemWrapper>
		</Wrapper>
	);
}

export default BuilderTextFild;
