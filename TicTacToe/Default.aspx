<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TicTacToe.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="MainStyle.css" rel="stylesheet" />
    <script src="JavaScript.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div id="game">
            <div>
                <asp:Label ID="lblTitle" runat="server" Text="Tic-Tac-Toe" onclick="reset()"></asp:Label>
            </div>
            <div>
                <asp:Label ID="lblGameState" runat="server">X to move</asp:Label>
            </div>
            <div id="board">
                <div class="row">
                    <asp:TextBox ID="txtSpaceUL" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                    <asp:TextBox ID="txtSpaceUM" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                    <asp:TextBox ID="txtSpaceUR" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                </div>
                <div class="row">
                    <asp:TextBox ID="txtSpaceML" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                    <asp:TextBox ID="txtSpaceMM" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                    <asp:TextBox ID="txtSpaceMR" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                </div>
                <div class="row">
                    <asp:TextBox ID="txtSpaceBL" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                    <asp:TextBox ID="txtSpaceBM" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                    <asp:TextBox ID="txtSpaceBR" runat="server" CssClass="square" onclick="updateSquare(this)" ReadOnly="True"></asp:TextBox>
                </div>
            </div>
            <div>
                <asp:Label ID="lblInvalidMove" runat="server"></asp:Label>
            </div>
        </div>
    </form>
</body>
</html>
