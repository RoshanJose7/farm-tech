import React from 'react';
import SolidButton from '../../components/customButton/solidButton.component';
import './FertilizerPage.styles.scss';

export default function FertilizerPage() {
	return (
		<div id='ferti-main'>
			<div id='ferti-head'>
				<div id='ferti-back' />
				<h1>Fertilizers</h1>
			</div>
			<div id='ferti-info'>
				<div className='ferti'>
					<div className='text'>
						<h1>Four risks of using chemical fertilizers</h1>
						<h3>
							Fertilizers are increasingly popular because they successfully support plant growth and
							increase the yield. But what are the dangers of overusing fertilizers? Did you know that too
							much fertilization might cause “fertilizer burn”? Read below more about the negative effects
							of using chemical fertilizers without knowing your soil’s nutrient needs.
						</h3>

						<ul>
							<li>
								<span>No optimal yield due to under-fertilization or over-fertilization</span>
								Soil testing before applying fertilizers is recommended in order to determine the soils
								status and nutrient need. Only then you know the exact type and quantity of chemical
								fertilizers you need to use. If you apply chemical fertilizers without knowing what your
								soil needs, you risk using too little chemical fertilizers (under-fertilization) and not
								achieving optimal yield. If you apply too much chemical fertilizers (over-fertilization)
								or apply it at the wrong time, there is a chance of “fertilizer burn” – scorching of
								plant foliage as a result of excess nitrogen salts. Injudicious use of fertilizers may
								result in crop damage and yield loss.
							</li>
							<li>
								<span>Wasting money on chemical fertilizers your soil does not need</span> If you do not
								know what nutrients are already present in your soil, you might use fertilizers that
								your soil is already abundant of. That is simply a waste of money. Excessive chemical
								fertilizers will not improve your yield and might have a negative effect on the
								environment.
							</li>
							<li>
								<span>Wasting limited resources</span>Nutrients such as phosphorus and potassium present
								in inorganic fertilizers are limited resources. Phosphorus, for example, is mined from
								phosphate deposits that are unevenly distributed around the world. The term “peak
								phosphorus” is used to describe the point in time when we reach the maximum global
								production rate of phosphorus. According to researchers peak, phosphorus will be reached
								in approximately 2030, whereas phosphorus reserves are expected to be depleted within
								the next 100 years. Therefore, we need to be more efficient in our usage of
								phosphor-based fertilizers nowadays in order to prevent a shortage in the future.
							</li>
							<li>
								<span>Causing environmental damage due to over-fertilizing</span> Soil testing provides
								a chemical fertilizers recommendation and enables farmers to apply the right chemical
								fertilizers and quantity that will be utilized by the plants. This minimizes the chances
								of applying excessive amounts of fertilizers and the resulting environmental damage. For
								example, excessive nitrogen-rich fertilizers might runoff from the field into water
								bodies causing an excess of nutrients in the water and rapid growth of plant life – a
								process known as eutrophication – with detrimental effects for water quality.
							</li>
						</ul>

						<p>For furthur enquires you can contact us.</p>
						<SolidButton title='Contact' link='/contact' />
					</div>
				</div>
			</div>
		</div>
	);
}
