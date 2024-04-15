import React from 'react'

function StyledCards() {
    return (
        <>
            <section className="w3l-bottom-grids-6 py-5" id="features">
                <div className="container py-lg-5 py-md-4 HomePageGrids">
                    <div className="grids-area-hny main-cont-wthree-fea row justify-content-center">
                        <div className="col-md-6 grids-feature mt-4">
                            <div className="area-box">
                                <div className="row">
                                    <div className="col-sm-2 icon">
                                        <span className="fa fa-video-camera"></span>
                                    </div>
                                    <div className="col-sm-10 area-box-info">
                                        <h4><a href="#url" className="title-head">
                                            Become a instructor on DigitalEdu</a></h4>
                                        <p className="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet.</p>
                                        <a className="btn btn-primary btn-style mt-4" href="#url">
                                            Start today <span className="fa fa-chevron-right ml-2" aria-hidden="true"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 grids-feature mt-4">
                            <div className="area-box">
                                <div className="row">
                                    <div className="col-sm-2 icon">
                                        <span className="fa fa-tasks"></span>
                                    </div>
                                    <div className="col-sm-10 area-box-info">
                                        <h4><a href="#url" className="title-head">
                                            DigitalEdu for business &amp; Community</a></h4>
                                        <p className="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet.</p>
                                        <a className="btn btn-primary btn-style mt-4" href="#url">
                                            Start today <span className="fa fa-chevron-right ml-2" aria-hidden="true"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default StyledCards