export const formatDate = (datevalue, type = "", format = "long") => {

  switch (type.toLowerCase()) {
    case "time" :
      return Intl.DateTimeFormat("en-US", {
        timeStyle: format
      }).format(new Date(datevalue))
    
    case "date" :
      return Intl.DateTimeFormat("en-US", {
        dateStyle: format
      }).format(new Date(datevalue))

    default :
     return Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(new Date(datevalue))
  } 
}