<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body style="background-color: #3366CC;">
    <table border="10" align="center" style="border-color: white">
      <xsl:for-each select="FACULTY/SPECIALIZATION">
        <tr><td style="text-align:center; border-color: yellow; background-color: #ffffff; font: 12pt sans-serif;"><xsl:value-of select="NAME"/></td></tr>
        <tr><td style="text-align:center; border-color: #ffc100; font:  14pt fantasy ; font-weight: 900; color: red;"><xsl:value-of select="TIME"/></td></tr>
        <tr><td style="text-align:center; border-color: #f99192; font-family: monospace; font-weight: 900;color: white;"><xsl:value-of select="EXAM"/></td></tr>
        <tr><td style="text-align:center; border-color: #b2eee6; font-weight: 900;color: yellow;"><xsl:value-of select="PAGES"/></td></tr>
        <tr><td style="text-align:center; border-color: #b967ff; color: white;"><xsl:value-of select="PASSING"/></td></tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template></xsl:stylesheet>