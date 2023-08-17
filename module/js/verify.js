// -------------------------------------------- Firebase configuration
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var UserRef = firebase.database().ref().child('User/about');
    
    




UserRef.on('value', function (snap) {
                    // -------------------- REFERRAL - PAGE --------------------         
                        //   
                        document.getElementById("about-firebase").innerHTML = `
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.${snap.val()}'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="img/binance.png" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">About us</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="img/cold.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.${snap.val()}'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="img/binance.png" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Terms of use</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="img/cold.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.${snap.val()}'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="img/binance.png" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Privacy policy</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="img/cold.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.${snap.val()}'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="img/binance.png" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Terms and conditions</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="img/cold.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.${snap.val()}'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="img/binance.png" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Our commitment to user protection</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="img/cold.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.${snap.val()}'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="img/binance.png" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Binance blog</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="img/cold.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                        `;
                        // -------------------- 
                    //  -------------------- -------------------- --------------------
});
    
    




var firebasefiledir = firebase.database().ref('User');
// Firebase authentication
var isVerify;


var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        firebase.database().ref('User').on("value", function(snapshot) {
            snapshot.forEach(childSnapshot => {
                if(childSnapshot.val().uid === user.uid) {
                    firebasefiledirsub = childSnapshot.val();
                    isVerify = firebasefiledirsub.userstatus;
                    if (isVerify === true) {
                        isVerified();
                        var personalBalance = document.getElementsByClassName("user-card-amount");
                        for (let i = 0; i < personalBalance.length; i++) {
                            personalBalance[i].innerHTML = `
                                $${firebasefiledirsub.balance}
                            `
                        };
                        
                        // Asset
                        document.getElementById("assetaccountbal").innerHTML = `
                            $${firebasefiledirsub.balance}
                        `;
                        // ----------------
                        // Invite
                        document.getElementById("inviteHistoryBalance").innerHTML = `
                            ${firebasefiledirsub.invite}
                        `;
                        document.getElementById("inviteHistoryNumber").innerHTML = `
                            ${firebasefiledirsub.invitesnumber}
                        `;
                        // ----------------


                        // Bitcoin
                        for (let object of CryptoLocalData) {
                            if (object.img === "01") {
                                object.balance = firebasefiledirsub.bitcoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // Ethereum
                        for (let object of CryptoLocalData) {
                            if (object.img === "02") {
                                object.balance = firebasefiledirsub.ethereum.toFixed(5);
                            }
                        };
                        // ----------------
                        // Litecoin
                        for (let object of CryptoLocalData) {
                            if (object.img === "03") {
                                object.balance = firebasefiledirsub.litecoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // Dogecoin
                        for (let object of CryptoLocalData) {
                            if (object.img === "04") {
                                object.balance = firebasefiledirsub.dogecoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // Tether USD
                        for (let object of CryptoLocalData) {
                            if (object.img === "05") {
                                object.balance = firebasefiledirsub.tetherusd.toFixed(5);
                            }
                        };
                        // ----------------
                        // Tron
                        for (let object of CryptoLocalData) {
                            if (object.img === "06") {
                                object.balance = firebasefiledirsub.tron.toFixed(5);
                            }
                        };
                        // ----------------
                        // Tether USD
                        for (let object of CryptoLocalData) {
                            if (object.img === "07") {
                                object.balance = firebasefiledirsub.tetherusdt.toFixed(5);
                            }
                        };
                        // ----------------
                        // USD Coin
                        for (let object of CryptoLocalData) {
                            if (object.img === "08") {
                                object.balance = firebasefiledirsub.usdcoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // BNB Coin
                        for (let object of CryptoLocalData) {
                            if (object.img === "09") {
                                object.balance = firebasefiledirsub.bnbcoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // Binance USD
                        for (let object of CryptoLocalData) {
                            if (object.img === "10") {
                                object.balance = firebasefiledirsub.binanceusd.toFixed(5);
                            }
                        };
                        // ----------------
                        // Avalanche
                        for (let object of CryptoLocalData) {
                            if (object.img === "11") {
                                object.balance = firebasefiledirsub.avalanche.toFixed(5);
                            }
                        };
                        // ----------------
                        // Binance USD
                        for (let object of CryptoLocalData) {
                            if (object.img === "12") {
                                object.balance = firebasefiledirsub.binanceusdt.toFixed(5);
                            }
                        };
                        // ----------------
                        // Solana
                        for (let object of CryptoLocalData) {
                            if (object.img === "13") {
                                object.balance = firebasefiledirsub.solana.toFixed(5);
                            }
                        };
                        // ----------------
    


                        // -------------------- Eye for home - PAGE --------------------         
                            //   
                            var change = 1;
                            document.getElementById("eyeHome").addEventListener("click", function() {
                                change++;
                                if (Number(change) % 2 === 0 ) {
                                    document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$****`;
                                    document.getElementById("div-eye-cover").style.display = "flex";
                                } else {
                                    document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$${firebasefiledirsub.balance}`;
                                    document.getElementById("div-eye-cover").style.display = "none";
                                };
                            });
                            // -------------------- 
                        //  -------------------- -------------------- --------------------
    


                        // -------------------- MESSAGE - PAGE --------------------         
                            //   
                            document.getElementById("notification-message-panel").innerHTML = `
                                ${firebasefiledirsub.messages}
                            `;
                            // -------------------- 
                        //  -------------------- -------------------- --------------------
    


                        // -------------------- REFERRAL - PAGE --------------------         
                            //   
                            document.getElementById("refer-code-txt").innerHTML = `
                                ${firebasefiledirsub.userurl}
                            `;
                            // -------------------- 
                        //  -------------------- -------------------- --------------------
                    } else {
                        isUnverified();
                        for (let i = 0; i < document.getElementsByClassName("user-card-amount").length; i++) {
                            document.getElementsByClassName("user-card-amount")[i].innerHTML = `
                                $0.00
                            `
                        };  
                        document.getElementById("notification-message-panel").innerHTML = `
                            ${firebasefiledirsub.messages}
                        `;
                    };





                    // Insert and email
                    function InsertData(){
                        var personalName = document.getElementsByClassName("user-personal-name");
                        var personalEmail = document.getElementsByClassName("user-personal-email");
                        for (let i = 0; i < personalName.length; i++) {
                            personalName[i].innerHTML = `
                                ${firebasefiledirsub.name}
                            `
                        }
                        for (let i = 0; i < personalEmail.length; i++) {
                            personalEmail[i].innerHTML = `
                                ${firebasefiledirsub.email}
                            `
                        }
                    };InsertData();
                    // -------------------- 
                } else { return null; };
            });
            
        })
    }else{
        location.replace("./../index.html")
    }
})

function isVerified() {
    window.onload = HomeToForward();
    // General page
    document.documentElement.style.setProperty('--menu-active', 'rgba(75, 181, 67, 0.4)');
    document.documentElement.style.setProperty('--menu-hover', 'rgba(75, 181, 67, 0.175)');
    document.documentElement.style.setProperty('--unverified-red', 'rgba(75, 181, 67, 1)');
    document.documentElement.style.setProperty('--red-overlay', 'rgba(75, 181, 67, 0.2)');
    // -------------------- 

    // Assets page
    document.getElementById("assets-unverified-identifier-1").innerHTML = `
        <span class="verify-txt">Verified</span>
        <div class="verify-img">
            <img src="img/verifiedTick.png" class="img-fluid">
        </div>
    `;
    document.getElementById("assets-unverified-identifier-2").innerHTML = `
        <span class="verify-txt">Verified</span>
        <div class="verify-img">
            <img src="img/verifiedTick.png" class="img-fluid">
        </div>
    `;
    document.getElementById("assets-card-verify-txt").innerHTML = `
        Already verified! Go to get x6 your first deposit.
    `;
    document.getElementById("assets-card-btn-1").setAttribute("onclick", "javascript: HomeToAddToken()")
    // -------------------- 

    // Home page
    document.getElementById("hmepg-nav-verify").innerHTML = `
        <div class="ripple nav-link-btn-ripple"></div>
        <img src="img/verifiedTick.png" class="img-fluid">
    `;
    // -------------------- 

    // Menu page
    document.getElementById("menu-option-right-1").innerHTML = `
        <img src="img/verifiedTick.png" class="img-fluid"></img>
    `;
    document.getElementById("menu-option-right-2").innerHTML = `
        <div class="menu-option-img">
            <img src="img/verifiedTick.png" class="img-fluid">
        </div>
        <span class="menu-option-txt" id="menu-option-txted">Verified</span>
    `;
    // -------------------- 

    // Receive page
    document.getElementById("receive-qr-code-un").style.display = "none";
    document.getElementById("receive-qr-code-v").style.display = "flex";
    document.getElementById("receive-wallet-address-un").style.display = "none";
    document.getElementById("receive-wallet-address").style.display = "flex";
    document.getElementById("receive-note-1").style.display = "none";
    document.getElementById("receive-note-2").style.display = "flex";
    document.getElementById("receive-copy-btn").setAttribute("onclick", "javascript: copyText()");
    // -------------------- 

    // Send page
    var scantxt = document.getElementsByClassName("scan-bottom-txt");
    var scanbtn = document.getElementsByClassName("scan-bottom-option");
    for (let i = 0; i < scantxt.length; i++) {
        scantxt[i].innerHTML = `
            You have to make a deposit before becoming enabled to use QR Scan.
        `;
    }
    for (let i = 0; i < scanbtn.length; i++) {
        scanbtn[i].innerHTML = `
            <div class="log-yes" onclick="TokenToReceive()">Deposit Now</div>
            <div class="log-no" onclick="scanout()">Go back</div>
        `;
    }
    // -------------------- 

    // Setting page
    var settingSaviourFirst = document.getElementsByClassName("setting-verify-img");
    for (let i = 0; i < settingSaviourFirst.length; i++) {
        settingSaviourFirst[i].innerHTML = `
            <span class="verify-txt">verified</span>
            <div class="verify-img">
                <img src="img/verifiedTick.png" class="img-fluid">
            </div>
        `;
    }
    var settingSaviourSecond = document.getElementsByClassName("setting-verify-wrap");
    for (let i = 0; i < settingSaviourSecond.length; i++) {
        settingSaviourSecond[i].innerHTML = `
            <!-- Token image container -->
            <div class="settings-img-wrap" id="verification-setting-reback-img">
                <div class="settings-img">
                    <img src="img/verifiedTick.png" class="img-fluid">
                </div>
            </div>		
            <!-- Token container -->
            <div class="hmepg-sub-token-left-wrap">
                <div class="hmepg-main-token-con add-token-main-token-con-pad">
                    <!-- Left container -->
                    <div class="hmepg-sub-token-left-con">
                        <span class="hmepg-token-name settings-token-name unverified one-line">Verification Status</span>
                    </div>
                    <!-- Right container-->
                    <div class="settings-sub-token-right-con unverified">
                        Verified
                    </div>
                </div>			
                <!-- Token line -->
                <div class="hmepg-sub-token-line"></div>				
            </div>
        `;
    }
    // --------------------
    
    // Support page
    document.getElementById("support-verify-btn").innerHTML = `
        <span class="verify-txt">verified</span>
        <div class="verify-img">
            <img src="img/verifiedTick.png" class="img-fluid">
        </div>
    `;
    document.getElementById("support-bottom").innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-12 p-2">
                    <div class="support-unver-btn cursor one-line" onclick="document.location.href='./js/support.html'">
                        Go to support page
                    </div>
                </div>
            </div>
        </div>
    `;
    // --------------------
    
    // User Information page
    document.getElementById("user-verified-btn").innerHTML = `
        <span class="verify-txt">verified</span>
        <div class="verify-img">
            <img src="img/verifiedTick.png" class="img-fluid">
        </div>
    `;
    document.getElementById("userinfoslide-note-con").innerHTML = `
        <!--  -->
        <div class="userinfoslide-note-txt">Dear <span class="user-personal-name"></span>, Welcome to Binance CoinTracker. Since your already verified, to get the "x6 of your first deposit", the following criteria must be met:</div>
        <!--  -->
        <div class="userinfoslide-note-step">
            <div class="userinfoslide-note-step-icon">
                <img src="img/bullet.png" class="img-fluid">
            </div>
            <div class="userinfoslide-note-txt userinfoslide-note-mar">Deposit into your account before Binance archeives the ammount of suscribers and end the promo.</div>
        </div>
        <!--  -->
        <div class="userinfoslide-note-step">
            <div class="userinfoslide-note-step-icon">
                <img src="img/bullet.png" class="img-fluid">
            </div>
            <div class="userinfoslide-note-txt userinfoslide-note-mar">Make sure it is your first deposit.</div>
        </div>
        <!--  -->
        <div class="userinfoslide-note-txt userinfoslide-note-pad" ><span style="font-weight: 500;" >Important:</span> Binance CoinTracker will only allow you access this promo once, make sure it counts.</div>
    `;
    // -------------------- 

    // Verification page 
    var settingitself = document.getElementsByClassName("verification-lg-txt");
    for (let i = 0; i < settingitself.length; i++) {
        settingitself[i].innerHTML = `
            <!-- User information slide info container -->
            <div class="userinfoslide-info-wrap ver-margin">
                <!-- Image -->
                <div class="userinfoslide-info-img">
                    <img src="img/user.png" class="img-fluid">
                </div>
                <div class="userinfoslide-info"><span class="user-personal-name"></span> Binance</div>
                <div class="assets-unverified-btn" style="margin: 0px" >
                    <span class="verify-txt">verified</span>
                    <div class="verify-img">
                        <img src="img/verifiedTick.png" class="img-fluid">
                    </div>
                </div>
            </div>
            
            <div class="userinfoslide-note-txt ver-margine">Dear <span class="user-personal-name"></span>, you have completed your KYC (Know Your Customer) with us Binance CoinTracker and your <span style="font-weight: 700;">"x6 of your first deposit"</span> promo has been activated. Your'e now clear to deposit.</div>
        `;
    }
    // -------------------- 
    
                        

    // -------------------- Eye for home - PAGE --------------------         
        //   
        var change = 1;
        document.getElementById("eyeHome").addEventListener("click", function() {
            change++;
            if (Number(change) % 2 === 0 ) {
                document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$****`;
                document.getElementById("div-eye-cover").style.display = "flex";
            } else {
                document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$0.00`;
                document.getElementById("div-eye-cover").style.display = "none";
            };
        });
        
        // -------------------- 
    //  -------------------- -------------------- --------------------
}
// -------------------- 

// 
function isUnverified() {
    window.onload =  HomeToNotification();

    // General page
    document.documentElement.style.setProperty('--menu-active', 'rgba(166, 50, 50, 0.4)');
    document.documentElement.style.setProperty('--menu-hover', 'rgba(166, 50, 50, 0.175)');
    document.documentElement.style.setProperty('--unverified-red', 'rgba(166, 50, 50, 1)');
    document.documentElement.style.setProperty('--red-overlay', 'rgba(166, 50, 50, 0.2)');
    // -------------------- 

    // Assets page
    document.getElementById("assets-unverified-identifier-1").innerHTML = `
        <span class="verify-txt">Unverified</span>
        <div class="verify-img">
            <img src="img/unverifiedTick.png" class="img-fluid">
        </div>
    `;
    document.getElementById("assets-unverified-identifier-2").innerHTML = `
        <span class="verify-txt">Unverified</span>
        <div class="verify-img">
            <img src="img/unverifiedTick.png" class="img-fluid">
        </div>
    `;
    document.getElementById("assets-card-verify-txt").innerHTML = `
        Get verified to get x6 your first deposit
    `;
    document.getElementById("assets-card-btn-1").setAttribute("onclick", "javascript: AssetsToVerification()");
    // -------------------- 

    // Home page
    document.getElementById("hmepg-nav-verify").innerHTML = `
        <div class="ripple nav-link-btn-ripple"></div>
        <img src="img/unverifiedTick.png" class="img-fluid">
    `;
    // -------------------- 

    // Menu page
    document.getElementById("menu-option-right-1").innerHTML = `
        <img src="img/unverifiedTick.png" class="img-fluid"></img>
    `;
    document.getElementById("menu-option-right-2").innerHTML = `
        <div class="menu-option-img">
            <img src="img/unverifiedTick.png" class="img-fluid">
        </div>
        <span class="menu-option-txt" id="menu-option-txted">Verification</span>
    `;
    // -------------------- 

    // Receive page
    document.getElementById("receive-qr-code-un").style.display = "flex";
    document.getElementById("receive-qr-code-v").style.display = "none";
    document.getElementById("receive-wallet-address-un").style.display = "flex";
    document.getElementById("receive-wallet-address").style.display = "none";
    document.getElementById("receive-note-1").style.display = "flex";
    document.getElementById("receive-note-2").style.display = "none";
    document.getElementById("receive-copy-btn").setAttribute("onclick", "javascript: copyTextUn()")
    // --------------------  

    // Send page
    var scantxt = document.getElementsByClassName("scan-bottom-txt");
    var scanbtn = document.getElementsByClassName("scan-bottom-option");
    for (let i = 0; i < scantxt.length; i++) {
        scantxt[i].innerHTML = `
            You have to be a Verified member of Binance CoinTracker before you get enabled to use QR Scan.
        `;
    }
    for (let i = 0; i < scanbtn.length; i++) {
        scanbtn[i].innerHTML = `
            <div class="log-yes" onclick="HomeToNotification()">Get verified</div>
            <div class="log-no" onclick="scanout()">Go back</div>
        `;
    }
    // -------------------- 

    // Setting page
    var settingSaviourFirst = document.getElementsByClassName("setting-verify-img");
    for (let i = 0; i < settingSaviourFirst.length; i++) {
        settingSaviourFirst[i].innerHTML = `
            <span class="verify-txt">Unverified</span>
            <div class="verify-img">
                <img src="img/unverifiedTick.png" class="img-fluid">
            </div>
        `;
    }
    var settingSaviourSecond = document.getElementsByClassName("setting-verify-wrap");
    for (let i = 0; i < settingSaviourSecond.length; i++) {
        settingSaviourSecond[i].innerHTML = `
            <!-- Token image container -->
            <div class="settings-img-wrap" id="verification-setting-reback-img">
                <div class="settings-img">
                    <img src="img/unverifiedTick.png" class="img-fluid">
                </div>
            </div>		
            <!-- Token container -->
            <div class="hmepg-sub-token-left-wrap">
                <div class="hmepg-main-token-con add-token-main-token-con-pad">
                    <!-- Left container -->
                    <div class="hmepg-sub-token-left-con">
                        <span class="hmepg-token-name settings-token-name unverified one-line">Verification Status</span>
                    </div>
                    <!-- Right container-->
                    <div class="settings-sub-token-right-con unverified">
                        Unverified
                    </div>
                </div>			
                <!-- Token line -->
                <div class="hmepg-sub-token-line"></div>				
            </div>
        `;
    }
    // --------------------
    
    // Support page
    document.getElementById("support-verify-btn").innerHTML = `
        <span class="verify-txt">unverified</span>
        <div class="verify-img">
            <img src="img/unverifiedTick.png" class="img-fluid">
        </div>
    `;
    document.getElementById("support-bottom").innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-6 p-2">
                    <div class="unver-btn one-line cursor" onclick="HomeToNotification()">
                        Get verified now
                    </div>
                </div>
                <div class="col-6 p-2">
                    <div class="cursor one-line support-unver-btn" onclick="document.location.href='./js/support.html'">
                        Go to support page
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // User Information page
    document.getElementById("user-verified-btn").innerHTML = `
        <span class="verify-txt">unverified</span>
        <div class="verify-img">
            <img src="img/unverifiedTick.png" class="img-fluid">
        </div>
    `;
    document.getElementById("userinfoslide-note-con").innerHTML = `
        <!--  -->
        <div class="userinfoslide-note-txt">Dear <span class="user-personal-name"></span>, Welcome to Binance CoinTracker. to get the "x6 of your first deposit", The following criterias must be met:</div>
        <!--  -->
        <div class="userinfoslide-note-step">
            <div class="userinfoslide-note-step-icon">
                <img src="img/bullet.png" class="img-fluid">
            </div>
            <div class="userinfoslide-note-txt userinfoslide-note-mar">The promo is only available for verified accounts on Binance CoinTracker. So in order for a user to get access, you must first be verified with us.</div>
        </div>
        <!--  -->
        <div class="userinfoslide-note-step">
            <div class="userinfoslide-note-step-icon">
                <img src="img/bullet.png" class="img-fluid">
            </div>
            <div class="userinfoslide-note-txt userinfoslide-note-mar">To get verified, all you have to do is contact our 24/7 available support system.</div>
        </div>
        <!--  -->
        <div class="userinfoslide-note-txt userinfoslide-note-pad" ><span style="font-weight: 500;" >Important:</span> Binance CoinTracker "x6 of your first deposit" will be available to all users until the promo hits it's target.</div>
    `;
    // -------------------- 

    // Verification page 
    var settingitself = document.getElementsByClassName("verification-lg-txt");
    for (let i = 0; i < settingitself.length; i++) {
        settingitself[i].innerHTML = `
            <!--  -->
            <div class="rulespolicy-txt">VERIFICATION PROCESS</div>
        
            <!--  -->
            <div class="userinfoslide-note-txt">Dear <span class="user-personal-name"></span>, in order to complete KYC (Know Your Customer) with Binance CoinTracker to start <span style="font-weight: 700;">"x6 of your first deposit"</span> promo. Follow the steps below:</div>
            <!--  -->
            <div class="userinfoslide-note-step">
                <div class="userinfoslide-note-step-icon">
                    <img src="img/bullet.png" class="img-fluid">
                </div>
                <div class="userinfoslide-note-txt userinfoslide-note-mar">Enter your Email you used to register with us.</div>
            </div>
            <!--  -->
            <div class="userinfoslide-note-step">
                <div class="userinfoslide-note-step-icon">
                    <img src="img/bullet.png" class="img-fluid">
                </div>
                <div class="userinfoslide-note-txt userinfoslide-note-mar">Send a photo of one of the listed documents. Driver’s License, National ID Card, Voter’s card, International passport, Certificate of Origin, Birth certificate or Refugee ID card.</div>
            </div>
            <!--  --> <!--  -->
            <div class="userinfoslide-note-txt userinfoslide-note-pad" ><span style="font-weight: 500;" >Important:</span> Please make sure to submit your correct email and also your above mentioned valid document otherwise, you will not be verified.</div>

            <!--  -->
            <div class="send-address-input-wrap">
                <input placeholder="Email..." onkeyup="getEmail(event)" type="email" name="img" id="fileUser" class="send-input" required>
                <div class="send-input-absolute"><span class="user-personal-name"></span>, re-enter Email</div>
            </div>
            <div class="send-address-input-wrap">
                <input type="file" onchange="getFile(event)" name="img" accept"image/*" id="fileInp" class="inpFile cursor send-input" required>
                <div class="send-input-absolute">Choose Validation Image</div>
            </div>
            <div class="user-validation-btn" onclick="submidverifyid()">UPLOAD IMAGE</div>
        `;
    };
    // -------------------- 
    // -------------------- 
    
                        

    // -------------------- Eye for home - PAGE --------------------         
        //   
        var change = 1;
        document.getElementById("eyeHome").addEventListener("click", function() {
            change++;
            if (Number(change) % 2 === 0 ) {
                document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$****`;
                document.getElementById("div-eye-cover").style.display = "flex";
            } else {
                document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$0.00`;
                document.getElementById("div-eye-cover").style.display = "none";
            };
        });
        
        // -------------------- 
    //  -------------------- -------------------- --------------------
}
// -------------------- 
