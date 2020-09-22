import React from 'react';

class Friends extends React.Component {

  render() {
    return(
      <div>

        <section className="bg-light pt-5 testimony-full">
                
                <div className="owl-carousel single-carousel">

                
                <div className="container">
                    <div className="row"> 
                    <div className="col-lg-6 align-self-center text-center text-lg-left">
                        <blockquote>
                        <p>아마곗돈을 통해서 목돈 마련했어요! 여행자금으로 모으고 있는데 코로나19 끝나면 유럽갈거에요.</p>
                        <p><cite> JuHyun Lee</cite></p>
                        </blockquote>
                    </div>
                    <div className="col-lg-6 align-self-end text-center text-lg-right">
                        <img src="images/cute.jpg" alt="Image" className="img-fluid mb-0"/>
                    </div>
                    </div>
                </div>

                
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 align-self-center text-center text-lg-left">
                        <blockquote>
                        <p>연말모임 회식비용 모으는 데 아주 최고에요!! 저는 소주파거든요~ 함께해요 우리~</p>
                        <p><cite> Sumin</cite></p>
                        </blockquote>
                    </div>
                    <div className="col-lg-6 align-self-end text-center text-lg-right">
                        <img src="images/soju.jpg" alt="Image" className="img-fluid mb-0"/>
                    </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 align-self-center text-center text-lg-left">
                        <blockquote>
                        <p>돈 모으는 재미로 취준생활 이겨내고 있습니다. 취뽀해서 놀러갈거에요 ^__^</p>
                        <p><cite>MinHyeok</cite></p>
                        </blockquote>
                    </div>
                    <div className="col-lg-6 align-self-end text-center text-lg-right">
                        <img src="images/chippo.jpg" alt="Image" className="img-fluid mb-0"/>
                    </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 align-self-center text-center text-lg-left">
                        <blockquote>
                        <p>아마곗돈 통해서 다이어트 비용 모았어요. 계모임 하나 더 가입해서 아이돌 데뷔할거에요</p>
                        <p><cite>SeongHyun</cite></p>
                        </blockquote>
                    </div>
                    <div className="col-lg-6 align-self-end text-center text-lg-right">
                        <img src="images/diet.jpg" alt="Image" className="img-fluid mb-0"/>
                    </div>
                    </div>
                </div>

            </div>

            </section>

      </div>
    );
  }
}

export default Friends;