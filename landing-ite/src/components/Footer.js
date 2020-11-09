import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    I wont send you nothing, but here you can subscribe.
                </p>
                <p className='footer-subscription-text'>
                    {" "}
                    But you can unsubscribe
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            SKLTR48  &nbsp;
                            <i class='fas fa-skull' />
                        </Link>
                    </div>
                    <small class='website-rights'>Skeletor48 © 2020</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link facebook'
                            href='https://m.me/mihaly.banfi.5'
                            target='_blank'
                            aria-label='Facebook'>
                            <i class='fab fa-facebook-messenger' />
                        </a>
                        <a
                            class='social-icon-link instagram'
                            href='https://www.instagram.com/cuarenta_y_ocho/'
                            target='_blank'
                            aria-label='Instagram'>
                            <i class='fab fa-instagram' />
                        </a>
                        <a
                            class='social-icon-link youtube'
                            href='https://gitlab.com/Skeletor48'
                            target='_blank'
                            aria-label='Youtube'>
                            <i class='fab fa-gitlab' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            href='https://github.com/Skeletor48'
                            target='_blank'
                            aria-label='Twitter'>
                            <i class='fab fab fa-github' />
                        </a>
                        <a
                            class='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/mihaly-banfi-22962986/'
                            target='_blank'
                            aria-label='LinkedIn'>
                            <i class='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
