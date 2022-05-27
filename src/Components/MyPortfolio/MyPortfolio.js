import React from 'react';

const MyPortfolio = () => {
    const styleCss = 'w-28 border py-1 px-3 '
    const skillSet =['HTML', 'css', 'JavaScript', 'React','Bootstrap', 'Tailwind', 'Photoshop', 'Illustrator']
    const imgUrl = 'https://video.fdac3-1.fna.fbcdn.net/v/t1.6435-9/81240839_2563183037130398_8953750216398340096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXwOg7oa_wg1ZhUjIVOUIo6qRA5prsQtjqpEDmmuxC2Hyxfm9yNPUTz5PL09EMb5vD5kWsiFTvPOjOnwoHZrac&_nc_ohc=4efFn3z_BYIAX87UxaJ&_nc_ht=video.fdac3-1.fna&oh=00_AT-x5zcFuTnDPt9wcBVl5vQS9was0BbO_XXRHj-9JdG6xw&oe=62B5B78E'
    return (
        <div className='sm:w-full md:w-4/5  mx-auto '>
            <h1 class="text-5xl text-center mt-3 font-bold">My Portfolio</h1>
            <div className="hero min-h-screen ">

                <div className="hero-content shadow-2xl round flex-col lg:flex-row py-10">
                    <div className='indicator md:mx-5'>
                        <div class="sm:w-full md:w-48 rounded-full">
                            <img src={imgUrl} className="w-48 rounded-full shadow-2xl" />
                        </div>
                        <span class="indicator-item indicator-middle badge badge-accent"></span>
                    </div>
                    <div className='md: mx-5'>
                        <h1 class="text-2xl font-bold">Masud Patoary</h1>
                        <h1 class="text-xl font-bold">masudpatoary@gmail.com</h1>
                        <div class="divider"></div>
                        <h1 class="text-xl font-bold">Education</h1>
                        <h1 class="text-lg font-bold">Southeast University</h1>
                        <h1 class="text-lg">Major: Finance</h1>

                        <h1 class="text-lg font-bold mt-3">City University (BD)</h1>
                        <h1 class="text-lg">Major: Finance</h1>

                        <h1 class="text-xl font-bold mt-5">Web Devlopment Skill</h1>
                        <div className='grid grid-cols-3 gap-4 mt-2'>
                            <span className={styleCss}>Html</span>
                            {
                                skillSet.map(skill=><span className={styleCss}>{skill}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;