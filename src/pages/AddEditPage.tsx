"use client"

import React from "react"
import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { motion, type Variants } from "framer-motion"
import { createUser, updateUser, getUser } from "../services/api"
import { Card } from "../components/ui/card"
import PageHeader from "../components/common/PageHeader"
import PersonalInfoSection from "../components/forms/PersonalInfoSection"
import ContactInfoSection from "../components/forms/ContactInfoSection"
import AdditionalDetailsSection from "../components/forms/AdditionalDetailsSection"
import FormActionButtons from "../components/forms/FormActionButtons"
import type { User } from "@/types/user"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().min(10, "Must be at least 10 digits").max(15, "Too long").required("Phone is required"),
  address: Yup.string(),
  status: Yup.string().oneOf(["active", "inactive"]).required("Status is required"),
  gender: Yup.string().oneOf(["male", "female"]).required("Gender is required"),
  location: Yup.string(),
  profile: Yup.string().url("Must be a valid URL"),
})

const AddEditPage = () => {
  const { id } = useParams<{ id?: string }>()
  const navigate = useNavigate()
  const isEdit = !!id

  const initialValues: Partial<User> = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    status: "active",
    gender: "male",
    location: "",
    profile: "",
  }

  const [userValues, setUserValues] = React.useState(initialValues)

  useEffect(() => {
    if (isEdit) {
      getUser(id!)
        .then((res) => setUserValues(res.data))
        .catch((err) => toast.error(err))
    }
  }, [id, isEdit])

  const handleSubmit = async (values: Partial<User>) => {
    try {
      if (isEdit) {
        await updateUser(id!, values)
        toast.success("User updated successfully")
      } else {
        await createUser(values)
        toast.success("User added successfully")
      }
      navigate("/")
    } catch (err) {
      toast.error(err as string)
    }
  }

  return (
    <div className="min-h-screen">
      <motion.div
        className="container mx-auto px-4 py-8 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <PageHeader isEdit={isEdit} />

        {/* Form Card */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 md:p-8">
            <Formik
              initialValues={userValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ values, handleChange, errors, touched, handleSubmit, isSubmitting }) => {
                return (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <PersonalInfoSection
                      values={values}
                      handleChange={handleChange}
                      errors={errors}
                      touched={touched}
                    />

                    <ContactInfoSection
                      values={values}
                      handleChange={handleChange}
                      errors={errors}
                      touched={touched}
                    />

                    <AdditionalDetailsSection
                      values={values}
                      handleChange={handleChange}
                      errors={errors}
                      touched={touched}
                    />

                    <FormActionButtons isSubmitting={isSubmitting} isEdit={isEdit} />
                  </form>
                )
              }}
            </Formik>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AddEditPage
