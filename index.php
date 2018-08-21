<!doctype html>
<html>
    <?php include "resources/fp-config.php" ?>
    <head>
        <?php include "resources/templates/header.php" ?>
    </head>

    <body>
    <?php include "resources/templates/modal.php" ?>
    <div id="background">
        <div id="header">
            <?php include "resources/templates/nav-bar.php" ?>
        </div>
        <div id="main">
        <div class = "featured-wrapper">
            <div class="horz-divider"></div>
            <div class = "featured-post">

                <h2>Example Post</h2>
                <p>
                    This is what a post made by the club admins would look like on the real page. 
                    They would make these posts using Squarespace's UI. Sinced this mockup
                    isn't on Squarespace, I simply coded the post into the HTML instead.
                </p>
            </div>
            <div class="horz-divider"></div>
        </div>

        <div class = "featured-wrapper">
            <div class="horz-divider"></div>
            <div class = "featured-post">
                <?php include "resources/libraries/reCaptcha/includes/simple.php" ?>
            </div>
            <div class="horz-divider"></div>
        </div>

            <div id = "footer"> <?php include "resources/templates/footer.php" ?>
            </div>
        </div>
    </div>
    </body>
</html>

