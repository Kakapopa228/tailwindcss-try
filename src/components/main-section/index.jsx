import React from 'react';
import MenImage from '../../images/image-hero-desktop.png';
import MenImageMobile from '../../images/image-hero-mobile.png';
import { ReactComponent as Databiz} from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile} from '../../images/client-audiophile.svg';
import { ReactComponent as Meet} from '../../images/client-meet.svg';
import { ReactComponent as Maker} from '../../images/client-maker.svg';
import { Button } from '../button'

export const MainSection = () => {
	return (
		<section className='w-full flex-col-reverse xl:flex-row flex mt-6 h-full justify-between'>
			<div className='relative text-center xl:w-2/4 xl:text-left mt-12 xl:mt-60'>
				<h1 className='text-3xl xl:text-8xl font-black mt-6 whitespace-pre-line'>
					{`Make\n remote work`}
				</h1>
				<p className="text-medium-grey text-lg my-12 whitespace-pre-line">
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, ullamco laboris commodo consequat.'}
				</p>
				<Button isFilled={true}>Learn More</Button>
				<div className="flex mt-20 justify-around xl:absolute bottom-2 w-full items-center">
					<Databiz/>
					<Audiophile/>
					<Meet/>
					<Maker/>
				</div>
			</div>
			<div className='hidden xl:flex w-full xl:w-2/4 mt-20 '>
				<img src={MenImage} alt='nigga'/>
			</div>
			<div className='flex xl:hidden mt-20 justify-center'>
				<img src={MenImageMobile} alt='nigga'/>
			</div>
		</section>
	)
}
