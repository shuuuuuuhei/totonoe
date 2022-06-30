type inputProps = {
    type: string,
    name: string,
    value: string,
    onChange: React.ChangeEventHandler,
    placehodlder?: string,
    errorDiv: string,
    errorMsg: string,
    className: string,
}

export const Input = (props: inputProps) => {
    const { type, name, value, onChange, placehodlder, errorDiv, errorMsg, className } = props
    return(
        <div className="mb-3">
            <input
                type={type}
                className={`form-control ${className}`}
                id={name}
                name={name}
                defaultValue={value}
                onChange={onChange}
                placeholder={placehodlder}
            />
        </div>
    )
}