import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { Button } from 'react-bootstrap';
import SolidButton from '../../components/customButton/solidButton.component';
import * as yup from 'yup';
import './hotelPage.styles.scss';
import { number } from 'yup/lib/locale';

const CustomCheckBox = props => {
	return (
		<div className='veggies mb-3'>
			<Field className='veggies-checkbox' name='veggies' type='checkbox' value={props.value} />
			<label>{props.value}</label>
		</div>
	);
};

function hotelPage() {
	const validationSchema = yup.object({
		name: yup.string().required().max(15),
		hotelName: yup.string().required().max(15),
		contactNumber: yup.number().required().max(13),
		address: yup.string().required().max(25),
		timeSlot: yup.date(),
		veggies: yup.array().of(yup.string()),
		vegetables: yup.array().of(
			yup.object().shape({
				name: yup.string().required(),
				id: yup.number()
			})
		)
	});

	return (
		<div id='hotel'>
			<div id='hotel-head'>
				<h1>Buy Fresh, Serve Fresh</h1>
				<div id='hotel-back' />
			</div>

			<div id='hotel-content'>
				<div id='hotel-text'>
					<h2>Get Fresh Vegetables, with exclusive offers and delivery facilities.</h2>
				</div>
			</div>

			<Formik
				validateOnChange={true}
				initialValues={{
					name: '',
					hotelName: '',
					contactNumber: '',
					address: '',
					veggies: [],
					timeSlot: '',
					vegetables: [{ name: '', id: '' + Math.random() }]
				}}
				validationSchema={validationSchema}
				onSubmit={(data, { setSubmitting }) => {
					setSubmitting(true);
					// make async call
					console.log('submit: ', data);
					setSubmitting(false);
				}}
			>
				{({ values, errors, isSubmitting }) => (
					<Form id='hotel-form'>
						<h4>Please fill the form to place an order</h4>
						<Field className='veggies-input' placeholder='Name' name='name' type='input' />
						<Field className='veggies-input' placeholder='Hotel Name' name='hotelName' type='input' />
						<Field
							className='veggies-input'
							placeholder='Contact Number'
							name='contactNumber'
							type='input'
						/>
						<Field className='veggies-input' placeholder='Hotel Address' name='address' type='input' />

						<Field className='veggies-input' placeholder='Date for delivery' name='timeSlot' type='date' />
						<Field
							className='veggies-input'
							placeholder='Time Slot for delivery'
							name='timeSlot'
							type='time'
						/>

						<h4>Select the Vegetables required:</h4>
						<div id='checkbox'>
							<div id='checkbox-left'>
								<CustomCheckBox name='veggies' value='onion' />
								<CustomCheckBox name='veggies' value='tomato' />
								<CustomCheckBox name='veggies' value='potato' />
								<CustomCheckBox name='veggies' value='cabbage' />
								<CustomCheckBox name='veggies' value='capsicum' />
								<CustomCheckBox name='veggies' value='beans' />
								<CustomCheckBox name='veggies' value='carrot' />
							</div>
							<div id='checkbox-right'>
								<CustomCheckBox name='veggies' value='garlic' />
								<CustomCheckBox name='veggies' value='ginger' />
								<CustomCheckBox name='veggies' value='spinach' />
								<CustomCheckBox name='veggies' value='lime' />
								<CustomCheckBox name='veggies' value='green peas' />
								<CustomCheckBox name='veggies' value='drum stick' />
								<CustomCheckBox name='veggies' value='lettuce' />
							</div>
						</div>

						<h4>Anything else which you need, which we may have missed?</h4>
						<FieldArray name='vegetables'>
							{arrayHelpers => (
								<div className='add-veggie'>
									<Button
										variant='success'
										onClick={() =>
											arrayHelpers.push({
												name: '',
												id: '' + Math.random()
											})
										}
									>
										+ Add Vegetables
									</Button>
									{values.vegetables.map((vegetable, index) => {
										return (
											<div key={vegetable.id}>
												<Field placeholder='vegetable name' name={`vegetables.${index}.name`} />
												<Button
													className='remove-btn'
													variant='danger'
													onClick={() => arrayHelpers.remove(index)}
												>
													x
												</Button>
											</div>
										);
									})}
								</div>
							)}
						</FieldArray>
						<div>
							<button id='hotel-btn' disabled={isSubmitting} type='submit'>
								Place Order
							</button>
						</div>
					</Form>
				)}
			</Formik>

			<div id='end-contact'>
				<p>For furthur enquires you can contact us.</p>
				<SolidButton title='Contact' link='/contact' />
			</div>
		</div>
	);
}

export default hotelPage;
