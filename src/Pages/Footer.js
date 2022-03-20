import React from 'react'
import Button from '../Components/Button'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="foother-subscription">
            <p className="footer-subscription-heading">
                Join the Emerlad newsletter to receive the updates
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your email" className="footer-input" />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Footer