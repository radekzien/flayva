import { Router, Request, Response } from "express";
import google from "@server/routes/auth/google.route";
import {
  expressEnsureUnauthenticated,
  ensureAuthenticated,
} from "@/server/middleware/auth.middleware";
import { suvidha } from "@/server/suvidha";
import { Http } from "suvidha";

const router: Router = Router();

router.use("/google", expressEnsureUnauthenticated, google);

/**
 * /auth/me
 *
 * Return details of the status of authentication for the client
 */
router.get("/me", (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.json({
      authenticated: true,
      user: req.user,
    });
  } else {
    res.json({
      authenticated: false,
      message: "Not authenticated",
    });
  }
});

/**
 * /auth/logout
 *
 * Log out the user if they are authenticated
 */
router.get(
  "/logout",
  suvidha()
    .use(ensureAuthenticated)
    .handler((req) => {
      req.logout((err) => {
        if (err) {
          // TODO: log error
          return Http.InternalServerError.body({ message: "Failed to log out" });
        }

        req.session.destroy((sessionErr) => {
          if (sessionErr) {
            // TODO: log error
            return Http.InternalServerError.body({ message: "Failed to log out" });
          }

          // TODO: Clear 'connect.sid' cookie here
          return Http.Ok.body({ message: "successfully logged out" }); // Redirect to login page or home page
        });
      });
    })
);

export default router;
