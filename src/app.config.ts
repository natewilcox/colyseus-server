import config from "@colyseus/tools";
import { monitor } from "@colyseus/monitor";
import { PrivateRoom, PublicRoom } from "@natewilcox/tic-tac-toe-server";
import * as PICOW from "@natewilcox/picow-server";
import { GameRoom } from "@natewilcox/rabit-jump-server";
import { GameRoom as ZeldaRoom } from "@natewilcox/zelda-server";

export default config({

    initializeGameServer: (gameServer) => {
 
        console.log('Configuring TIC-TAC-TOE rooms....');
        gameServer.define('tictactoe_public_room', PublicRoom);
        gameServer.define('tictactoe_private_room', PrivateRoom);

        console.log('Configuring RABIT-JUMP rooms....');
        gameServer.define('rabit_room', GameRoom);
        
        console.log('Configuring PICOW rooms....');
        gameServer.define('picow_public_room', PICOW.PublicRoom);
        gameServer.define('picow_private_room', PICOW.PrivateRoom);

        console.log('Configuring ZELDA rooms...');
        gameServer.define('zelda_room', ZeldaRoom);

        console.log("READY and GO!!!");
    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         * Read more: https://expressjs.com/en/starter/basic-routing.html
         */
        app.get("/hello_world", (req, res) => {
            res.send("It's time to kick ass and chew bubblegum!");
        });

        /**
         * Use @colyseus/playground
         * (It is not recommended to expose this route in a production environment)
         */
        // if (process.env.NODE_ENV !== "production") {
        //     app.use("/", playground);
        // }

        /**
         * Use @colyseus/monitor
         * It is recommended to protect this route with a password
         * Read more: https://docs.colyseus.io/tools/monitor/#restrict-access-to-the-panel-using-a-password
         */
        //app.use("/colyseus", monitor());
    },


    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});
