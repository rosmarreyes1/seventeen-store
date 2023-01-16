import { useState } from "react"

export const useForm = (initialForm, validationsForm) => {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleBlur = (e) =>{
        handleChange(e)
        setError(validationsForm(form))
    }

    return {
        form,
        error,
        handleChange,
        handleBlur,
    }
}
