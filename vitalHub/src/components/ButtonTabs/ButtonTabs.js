import { ButtonTabsStyle, ButtonTextStyle } from "./Style"

export const ButtonTabs = ({
    textButton,
    clickButton = false,
    onPress,
}) => {
    return (
        <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextStyle clickButton={clickButton}>
                {textButton}
            </ButtonTextStyle>
        </ButtonTabsStyle>
    )

}