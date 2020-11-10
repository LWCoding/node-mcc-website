$(document).ready(() => {
    $("#submit").click((event) => {
        event.preventDefault()
        if ($("#name").val().length === 0 || $("#email").val().length === 0 || $("#aff").val().length === 0 || $("#hometown").val().length === 0) {
            alert("Please fill out all of the fields in order to proceed!")
        }
        let payload = {
            name: $("#name").val(),
            email: $("#email").val(),
            aff: $("#aff").val(),
            hometown: $("#hometown").val()
        }
        $("#join").remove()
        $("#process").css({display: "flex"})
        fetch("/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then((res) => {
            if (!res.ok) {
                $("#res").css({color: "red"}).text("One of your fields weren't accepted. Please try again later.")
            } else {
                $("#res").css({color: "green"}).text("Your form has been successfully submitted!")
            }
        })
    })
})