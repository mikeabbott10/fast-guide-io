const NavigationAndHistory = () => {
    const title = "Navigation and history"
    return (
        <>
            <h3>{title}</h3>
            <p>The <i>FastGuide</i> component takes one boolean input named "<i>enableHistory</i>". When set, this flag enables the affection of the window history stack by the user navigating within the guide. Thus, you allow the user to use the browser's "back" and "forward" keys to <strong>move between the lessons visited</strong>. In this context you can see the window location hash changing.</p>
            <p>When the flag is not set, opening a lesson won't affect the window history stack. </p>
        </>
    )
}

export default NavigationAndHistory
