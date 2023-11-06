import { Form, FormGroup } from "reactstrap";
import "../Style/BookingForm.scss";

export default function BookingForm() {
    //submit handler function
    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        //booking form
        <Form onSubmit={submitHandler}>
            {/*booking form first name*/}
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="text" placeholder="First Name"/>
            </FormGroup>
            {/*booking form lasst name*/}
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="text" placeholder="Last Name"/>
            </FormGroup>
            {/*booking form email*/}
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="email" placeholder="Email"/>
            </FormGroup>
            {/*booking form phone*/}
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="number" placeholder="Phone Number"/>
            </FormGroup>
            {/*booking form from address*/}
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="text" placeholder="From Address"/>
            </FormGroup>
            {/*booking form to address*/}
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="text" placeholder="To Address"/>
            </FormGroup>
            {/*booking form select person */}
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <select>
                    <option value="1 person">1 Person</option>
                    <option value="2 person">2 Person</option>
                    <option value="3 person">3 Person</option>
                    <option value="4 person">4 Person</option>
                    <option value="5+ person">5+ Person</option>
                </select>
            </FormGroup>
            {/*booking form select luggage */}
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <select>
                    <option value="1 luggage">1 luggage</option>
                    <option value="2 luggage">2 luggage</option>
                    <option value="3 luggage">3 luggage</option>
                    <option value="4 luggage">4 luggage</option>
                    <option value="5+ luggage">5+ luggage</option>
                </select>
            </FormGroup>
            {/*booking form date*/}
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="date" placeholder="Journey Date"/>
            </FormGroup>
            {/*booking form time*/}
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="time" placeholder="Journey Time" className="time__picker"/>
            </FormGroup>
            {/*booking form textarea*/}
            <FormGroup>
                <textarea 
                rows={5}
                type="textarea"
                className="textarea textar"
                placeholder="Write"
                ></textarea>
            </FormGroup>
        </Form>
    );
};