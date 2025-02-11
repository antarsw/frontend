export const validateForm = (formData) => {
    if (!formData.name.trim()) {
      return "Name is required";
    } else if (/\d/.test(formData.name)) {
        return "Name should not contain numbers";
    }
  
    if (!formData.email.trim()) {
        return "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        return "Email is invalid";
      } else if (!formData.email.endsWith("@gmail.com")) {
        return "Email is Invalid";
      } else if (/\s/.test(formData.email)) {
        return "Email should not contain spaces";
      }
    
      if (!formData.password) {
        return "Password is required";
      } else if (formData.password.length < 8) {
        return "Password must be at least 8 characters long";
      } else if (!/[A-Z]/.test(formData.password)) {
        return "Password must contain at least one uppercase letter";
      } else if (!/\d/.test(formData.password)) {
        return "Password must contain at least one number";
      } else if (!/[!@#$%^&*]/.test(formData.password)) {
        return "Password must contain at least one special character (!@#$%^&*)";
      } else if (/\s/.test(formData.password)) {
        return "Password should not contain spaces";
      }
    
      if (!formData.confirmPassword) {
        return "Confirm Password is required";
      } else if (formData.confirmPassword !== formData.password) {
        return "Passwords do not match";
      }
  
    return null; // No errors
  };
  