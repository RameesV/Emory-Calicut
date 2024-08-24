import './HeaderComponent.scss'

function HeaderComponent({mainHeading, subHeading}) {
    return (
        <div className="section-header-wrapper mb-4 mt-4">
            <span className="sub-title">{subHeading}</span>
            <h1 className="main-title text-left">{mainHeading}</h1>
        </div>
    )
}

export default HeaderComponent