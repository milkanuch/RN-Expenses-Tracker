import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: Colors.gray500,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.4
    },
    textBase: { 
        color: Colors.primary50,
    },
    description:{
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: { 
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: '#f0f0ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: { 
        color: Colors.primary400
    },
    pressed:{
        opacity: 0.75
    }
});