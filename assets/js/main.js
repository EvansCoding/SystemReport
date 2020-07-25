jQuery(function($) {
    // Change the default message of the required filed in the form-control in bootstrap
    $('#login-username').attr("oninvalid", "this.setCustomValidity('Hãy nhập tài khoản của bạn!')");
    $('#login-username').attr("oninput", "setCustomValidity('')");
    $('#login-password').attr("oninvalid", "this.setCustomValidity('Hãy nhập mật khẩu của bạn!')");
    $('#login-password').attr("oninput", "setCustomValidity('')");

    $(document).ready(function() {
        let width = $(window).width();
        if (width < 768) {
            if (!$(".page-wrapper").hasClass("pinned")) {
                $(".page-wrapper").addClass("pinned");
                $("#sidebar").hover(
                    function() {
                        console.log("mouseenter");
                        $(".page-wrapper").addClass("sidebar-hovered");
                    },
                    function() {
                        console.log("mouseout");
                        $(".page-wrapper").removeClass("sidebar-hovered");
                    }
                );
            }
        } else {
            if ($(".page-wrapper").hasClass("pinned")) {
                // unpin sidebar when hovered
                $(".page-wrapper").removeClass("pinned");
                $("#sidebar").unbind("hover");
            }
        }
        scrollSidebar();

    });
    $(window).resize(function() {
        let width = $(window).width();
        if (width < 768) {
            if (!$(".page-wrapper").hasClass("pinned")) {
                $(".page-wrapper").addClass("pinned");
                $("#sidebar").hover(
                    function() {
                        console.log("mouseenter");
                        $(".page-wrapper").addClass("sidebar-hovered");
                    },
                    function() {
                        console.log("mouseout");
                        $(".page-wrapper").removeClass("sidebar-hovered");
                    }
                );
            }
        } else {
            if ($(".page-wrapper").hasClass("pinned")) {
                // unpin sidebar when hovered
                $(".page-wrapper").removeClass("pinned");
                $("#sidebar").unbind("hover");
            }
        }
        scrollSidebar();
    });

    $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }
    });

    //toggle sidebar
    $("#toggle-sidebar").click(function() {
        $(".page-wrapper").toggleClass("toggled");
    });

    $("#pin-sidebar").click(function() {
        if ($(".page-wrapper").hasClass("pinned")) {
            // unpin sidebar when hovered
            $(".page-wrapper").removeClass("pinned");
            $("#sidebar").unbind("hover");
        } else {
            $(".page-wrapper").addClass("pinned");
            $("#sidebar").hover(
                function() {
                    console.log("mouseenter");
                    $(".page-wrapper").addClass("sidebar-hovered");
                },
                function() {
                    console.log("mouseout");
                    $(".page-wrapper").removeClass("sidebar-hovered");
                }
            );

        }
    });


    function scrollSidebar() {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(".sidebar-content").mCustomScrollbar({
                axis: "y",
                autoHideScrollbar: true,
                scrollInertia: 300
            });
            $(".sidebar-content").addClass("desktop");
        }
    }
});