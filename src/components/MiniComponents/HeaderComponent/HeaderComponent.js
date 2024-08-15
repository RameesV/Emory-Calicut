import './HeaderComponent.scss'

function HeaderComponent({mainHeading, subHeading}) {
    return (
        <div className="section-header-wrapper mb-4 mt-4">
            <span className="sub-title">{subHeading}</span>
            <h3 className="main-title text-left">{mainHeading}</h3>
        </div>
    )
}

export default HeaderComponent