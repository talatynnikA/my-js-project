<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
	<html>
		<body style="background-color: #3366CC;">
			<table border="2" style="text-align:center;border-color: white" align="center">
				<tr bgcolor="yellow">
					<th>ФАМИЛИЯ</th>
					<th>ИМЯ</th>
					<th>ГОД РОЖДЕНИЯ</th>
					<th>СРЕДНИЙ БАЛЛ</th>
					
		</tr>
<xsl:for-each select="root/group">
	<xsl:sort select="YEAR"/>
	<tr>
		<td bgcolor="white"><xsl:value-of select="SURNAME"/></td>
		<td bgcolor="white"><xsl:value-of select="NAME"/></td>
		<td bgcolor="white"><xsl:value-of select="YEAR"/></td>
		<xsl:choose>
			<xsl:when test="MARK &gt;= 6">
				<td bgcolor="Green"><xsl:value-of select="MARK"/></td>
			</xsl:when>
			<xsl:when test="MARK &lt; 6">
				<td bgcolor="red"><xsl:value-of select="MARK"/></td>
			</xsl:when>
<xsl:otherwise>
	<td><xsl:value-of select="MARK"/></td>
</xsl:otherwise>
</xsl:choose>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
