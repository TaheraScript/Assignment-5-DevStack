import FooterImage from '../../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='mb-9'>
    <div className='divider'/>
        <div className='flex flex-col sm:flex-row container mx-auto justify-between items-start sm:items-center gap-6 mt-10 py-6 px-4'>
            <div className='space-y-3'>
                <img src={FooterImage} alt="Logo of DevStack" />
                <p className='text'>Curated tools, technologies, and resources for developers building<br />modern software.</p>
                <ul className='font-semibold text-[12px] text-[#475569] flex gap-4 items-center'>
                    <li><a href="https://github.com/TaheraScript?tab=repositories">GitHub</a></li>
                    <li><a href="https://x.com/">Twitter</a></li>
                    <li><a href="https://bd.linkedin.com/">LinkedIn</a></li>
                </ul>
            </div>
            <div>
                <h2 className='footer-text-style'>PRODUCT</h2>
                <ul className='text space-y-2'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
            <div>
                <h2 className='footer-text-style'>COMPANY</h2>
                <ul className='text space-y-2'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contaxt</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h2 className='footer-text-style'>LEGAL</h2>
                <ul className='text space-y-2 mb-14'>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div className='container mx-auto px-4'>
  <div className='divider' />
</div>
        <div className='flex justify-between container mx-auto'>
            <p className=' text-[12px] text-[#94A3B8] mb-2 '>© 2026 Dev Stack. All rights reserved.</p>
            <ul className=' text-[12px] text-[#94A3B8] flex gap-5 mb-2'>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
            </ul>
        </div>
        </div>
    );
};

export default Footer;