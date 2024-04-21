import './HeaderComponent.scss'

function HeaderComponent({mainHeading, subHeading}) {
    return (
        <div class="section-header-wrapper mb-4 mt-4">
            <span class="sub-title">{subHeading}</span>
            <h3 class="main-title text-left">{mainHeading}</h3>
        </div>
    )
}

export default HeaderComponent