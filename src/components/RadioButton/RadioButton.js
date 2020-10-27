import React from 'react'

class RadioButton extends React.Component
{
    render()
    {
        return (
                <div>
                    <label for="first">
                    <input type="radio" id= "first" />1st radio button
                    </label>

                    <label for="second">
                    <input type="radio" id= "second" />2nd radio button
                    </label>

                    <label for="third">
                    <input type="radio" id= "third" />3rd radio button
                    </label>
                    
                </div>
        )
    }
}

export default RadioButton;