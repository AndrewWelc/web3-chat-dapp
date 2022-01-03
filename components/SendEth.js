import { useMoralis } from "react-moralis"

const SendEth = () => {

    const { user, Moralis } = useMoralis();

    const sendEth = async () => {
        const receiverAddress = prompt(`Your ETH address is: ${user.get('ethAddress')}. Enter the receiver address:`);

        if (!receiverAddress) return;
        const txOptions = { type: 'native', receiver: receiverAddress, amount: Moralis.Units.ETH("0.01"), awaitReceipt: false };
        await Moralis.enableWeb3();
        const tx = await Moralis.transfer(txOptions);

            tx.on("transactionHash", (hash) => { })
            .on("receipt", (receipt) => { console.log(receipt) })
            .on("confirmation", (confirmationNumber, receipt) => { console.log(`Confirmed: ${confirmationNumber}, receipt: ${receipt}`); })
            .on("error", (error) => {
                // TODO: implement error modal
            });
    }



    return (

        <div className="text-sm absolute top-16 right-5 text-custom-blue">
            <button className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border 
            border-[#383152] hover:bg-[#383152] text-[#383152] hover:text-white font-normal py-2 px-2 rounded"
                onClick={sendEth}>Send 0.01 ETH</button>
        </div>

    )
}

export default SendEth;
