//import React
import React from 'react';
import Navbar from '@/components/Navbar.jsx';

// Set the date we're counting down to
var countDownDate = new Date("Mar 5, 2023 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("gamedayCount").innerHTML = "<span>"+days + " d</span> <span>" + hours + " h</span> <span>" + minutes + " m</span> <span>" + seconds + " s</span> ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("gamedayCount").innerHTML = "EXPIRED";
  }
}, 1000);
export default function PostIndex({data}) {
    return (
        <>
        <Navbar/>
        <div className="text-line d-none d-md-flex">
            <div className="line"></div>
            <div className="text">
                Be A Champions!
            </div>
        </div>
        <section id="hero" className="py-5">
            <div className="container mt-5 mt-md-0">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="color-yellow mt-5 mt-md-0">Hello Gamers!</p>
                        <h1>Kamu <span className="color-yellow">Pro Player</span> Mobile Legend? Buktikan Disini Sekarang!</h1>
                        <p className="color-textgrey my-3">Turnamen Mobile Legend Terbesar di Kota Tape Bondowoso. Daftarkan team kamu sekarang dan buktikan team kamu yang terbaik!</p>
                        <a href="" className="fs-18 color-white fw-bold">Prize Pool</a>
                        <a className="ms-4 btn btn-primary px-45 py-25 fw-bold btn-circle" href="#">Register</a>
                        <div className="my-5 img-partner">
                        <img src="https://binamutubangsa.com/wp-content/uploads/2022/02/5c7121203f8bb20f5623ca81_invision-logo-export-v1.png" alt=""/>
                        <img src="https://segubajio.com/wp-content/uploads/2022/07/5c7120fa2d05cec571969c2d_google-logo-export-v1.png" alt=""/>
                        <img src="https://caringforcare.co.uk/wp-content/uploads/2014/08/grey-logo.png" alt=""/>
                        <img src="https://www.ampfluence.com/wp-content/uploads/2020/11/forbes-logo-gray.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-hero">
                            <span className="fa fa-play"></span>
                            <img src="https://dafunda.com/wp-content/uploads/2021/06/hero-mobile-legends.jpeg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5" id="about">
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-10">
                                <div className="d-flex align-items-center">
                                    <div className="pipe-only me-3"></div>                                
                                    <h1 className="fw-bold color-white"> How it works</h1>
                                </div>
                                <p className="color-textgrey">Daftarkan team-mu sekarang, bertemu dengan team hebat lain dan jadi yang terbaik. Menangkan juga berbagai macam hadiahnya. Slot team terbatas!</p>
                                <a className="mt-2 mb-5 mb-md-0 btn btn-primary px-45 py-25 fw-bold btn-circle" href="#">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row align-items-center mb-5">
                            <div className="col-auto">
                                <div className="box-icon">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-mobile-alt"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="ms-3">
                                    <h5 className="fw-bold color-yellow">Daftarkan Team</h5>
                                    <p className="mb-0 color-textgrey">Daftarkan team-mu. Lakukan pembayaran, amankan slotnya dan menangkan perlombaannya!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-auto">
                                <div className="box-icon">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>

                                    <span className="fa fa-shirt"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="ms-3">
                                    <h5 className="fw-bold color-yellow">Free Jersey Untukmu!</h5>
                                    <p className="mb-0 color-textgrey">Free jersey untuk setiap anggota team kamu. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-auto">
                                <div className="box-icon">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-gamepad"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="ms-3">
                                    <h5 className="fw-bold color-yellow">Menangkan Perlombaannya!</h5>
                                    <p className="mb-0 color-textgrey">Game Day is Coming! Tunjukan kamu yang terbaik dengan mengalahkan semua musuh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="pricepool" className="py-5">
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="fw-bold color-white"><img src="assets/img/trophy.png" width="50px" alt=""/><span className="ms-3 color-yellow">Prize</span> Pool</h1>
                    </div>
                </div>
                <div className="row mt-4 mb-5 justify-content-center">
                    <div className="col-md-4 mb-5">
                        <div className="pricepool-box">
                            <div className="content">
                                <h4 className="fw-bold color-yellow">Juara 1</h4>
                                <p className="color-white mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores eius</p>
                            </div>
                            <div className="sticky">#1</div>
                        </div>
                        <div className="row mt-4 align-items-center">
                            <div className="col-auto">
                                <div className="box-icon">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-trophy"></span>
                                </div>
                            </div>
                            <div className="col">
                                <h1 className="price-text text-outline white fw-bold">1.5 jt +</h1>
                                <p className="color-textgrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ab dolorum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="pricepool-box">
                            <div className="content">
                                <h4 className="fw-bold color-yellow">Juara 2</h4>
                                <p className="color-white mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores eius</p>
                            </div>
                            <div className="sticky">#2</div>
                        </div>
                        <div className="row mt-4 align-items-center">
                            <div className="col-auto">
                                <div className="box-icon">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-trophy"></span>
                                </div>
                            </div>
                            <div className="col">
                                <h1 className="price-text text-outline white fw-bold">1 jt +</h1>
                                <p className="color-textgrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ab dolorum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="pricepool-box">
                            <div className="content">
                                <h4 className="fw-bold color-yellow">Juara 3</h4>
                                <p className="color-white mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores eius</p>
                            </div>
                            <div className="sticky">#3</div>
                        </div>
                        <div className="row mt-4 align-items-center">
                            <div className="col-auto">
                                <div className="box-icon">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-trophy"></span>
                                </div>
                            </div>
                            <div className="col">
                                <h1 className="price-text text-outline white fw-bold">500 rb +</h1>
                                <p className="color-textgrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ab dolorum</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="fw-bold color-white"><img src="assets/img/swords.png" width="50px" alt=""/> <span className="ms-3 color-yellow">Individual</span> Reward</h1>
                    </div>
                </div>
                <div className="row mt-4 mb-5">
                    <div className="col-md-4 mb-5">
                        <div className="pricepool-box">
                            <div className="content">
                                <h4 className="fw-bold color-yellow">MVP/ Best Player</h4>
                                <p className="color-white mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores eius</p>
                            </div>
                            <div className="sticky">#MVP</div>
                        </div>
                        <div className="row mt-4 align-items-center">
                            <div className="col-auto">
                                <div className="box-icon">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-trophy"></span>
                                </div>
                            </div>
                            <div className="col">
                                <h1 className="price-text text-outline white fw-bold">100 rb</h1>
                                <p className="color-textgrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ab dolorum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="pricepool-box">
                            <div className="content">
                                <h4 className="fw-bold color-yellow">Savage Bonus</h4>
                                <p className="color-white mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores eius</p>
                            </div>
                            <div className="sticky">#SAVAGE</div>
                        </div>
                        <div className="row mt-4 align-items-center">
                            <div className="col-auto">
                                <div className="box-icon">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-trophy"></span>
                                </div>
                            </div>
                            <div className="col">
                                <h1 className="price-text text-outline white fw-bold">150 rb</h1>
                                <p className="color-textgrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ab dolorum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="rules" className="py-5">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22ba8af1-9afe-4a42-8798-aa2a150683e0/dcc3x19-0caebc89-cddd-49e1-a23a-6cfe40e26bbe.png/v1/fill/w_1024,h_575,strp/mobile_legends_gatot_kaca_transparent__ahrat_king_by_b_la_ze_dcc3x19-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc1IiwicGF0aCI6IlwvZlwvMjJiYThhZjEtOWFmZS00YTQyLTg3OTgtYWEyYTE1MDY4M2UwXC9kY2MzeDE5LTBjYWViYzg5LWNkZGQtNDllMS1hMjNhLTZjZmU0MGUyNmJiZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xRBLY3WcKPH6t0JrNZWB1AxzGyfTnIYgJv78MERZRcc" className="hero-ml left" alt=""/>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec970f4-1706-4915-9a93-41f3d9c8202c/deofmjx-429587a4-73f8-4d5c-a703-663e2710f53c.png/v1/fill/w_1280,h_721,strp/mobile_legends_gatotkaca_spark_4k_png_by_divoras_deofmjx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvMmVjOTcwZjQtMTcwNi00OTE1LTlhOTMtNDFmM2Q5YzgyMDJjXC9kZW9mbWp4LTQyOTU4N2E0LTczZjgtNGQ1Yy1hNzAzLTY2M2UyNzEwZjUzYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sweKmZjJ6ieUb7IU-Sug89C9631rs8p62VShElVSP74" className="hero-ml right" alt=""/>
            <div className="container mb-4">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="color-yellow fw-bold"><img src="assets/img/smartphone.png" width="50px" alt="" className="me-3"/> Rules / <span className="color-white">How to play</span></h1>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-7">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Rule #1
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Setiap pemain wajib memiliki device berupa smartphone serta akun Mobile Legends sendiri dan bukan milik orang lain.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Rule #2
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Rule #3
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Rule #4
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Rule #5
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Rule #6
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Rule #7
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Rule #8
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Rule #9
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Rule #10
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
        <section id="gameday" className="py-5 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="fw-bold color-white"><img src="assets/img/helmet.png" className="me-3" width="50px" alt=""/> Game <span className="color-yellow">Day</span></h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="row align-items-center mb-4">
                            <div className="col-auto">
                                <div className="box-icon sm">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-location-dot"></span>
                                </div>
                            </div>
                            <div className="col">
                                <h5 className="fw-bold color-white">Gedung Olahraga Bondowoso</h5>
                            </div>
                        </div>
                        <div className="row align-items-center mb-4">
                            <div className="col-auto">
                                <div className="box-icon sm">
                                    <div className="pipes">
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                        <div className="pipe"></div>
                                    </div>
                                    <span className="fa fa-calendar-days"></span>
                                </div>
                            </div>
                            <div className="col">
                                <h5 className="fw-bold color-white">5 Maret 2023, 10:00 WIB</h5>
                            </div>
                        </div>
                        <div className="my-5" id="gamedayCount"></div>
                        <p className="color-white">Siap untuk bertanding? <a href="">Daftar Sekarang!</a></p>
                    </div>
                </div>
            </div>
        </section>
        <section id="regis" className="py-5">
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="fw-bold color-white"><img src="assets/img/pvp.png" className="me-3" width="50px" alt=""/> Registration <span className="color-yellow">Form</span></h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 mb-5">
                        <div className="input">
                            <label htmlFor="">Nama Team</label>
                            <input type="text" placeholder="Masukkan Nama Team" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="input">
                            <label htmlFor="">Ketua Team</label>
                            <input type="text" placeholder="Masukkan Ketua Team" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="input">
                            <label htmlFor="">Nomer Whatsapp</label>
                            <input type="text" placeholder="Nomer Whatsapp" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="input">
                            <label htmlFor="">Nama Anggota 1</label>
                            <input type="text" placeholder="Masukkan Nama Anggota 1" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="input">
                            <label htmlFor="">Nama Anggota 2</label>
                            <input type="text" placeholder="Masukkan Nama Anggota 2" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="input">
                            <label htmlFor="">Nama Anggota 3</label>
                            <input type="text" placeholder="Masukkan Nama Anggota 3" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="input">
                            <label htmlFor="">Nama Anggota 4</label>
                            <input type="text" placeholder="Masukkan Nama Anggota 4" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="input">
                            <label htmlFor="">Size Jersey</label>
                            <input type="text" placeholder="Masukkan Size Jersey" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="btn-custom">Submit</div>
                    </div>
                </div>
            </div>
        </section>
        <section id="footer" className="py-5 d-flex text-center justify-content-center">
            <p className="mb-0 color-textgrey">Copyright 2023 - Tournament Mobile Legend Setyo Budi</p>
        </section>
        </>
    )
}